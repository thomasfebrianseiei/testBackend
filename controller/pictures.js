const Picture = require("../models/pictures");
const Product = require("../models/products");

module.exports = {
  addPicture: async (req, res) => {
    const picture = await Picture.create({ link: req.body.link });
    const product = await Product.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { pictures: picture._id } },
      { new: true }
    );
    try {
      res.status(200).send({
        massage: "Created new picture success",
        picture,
        product
      });
    } catch (error) {
      res.status(400).send({
        massage: `failed to created new picture`,
        error
      });
    }
  },

  getPict: (req, res) => {
    Picture.findOne({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `can't find one`,
          error
        });
      } else {
        res.status(200).send({
          message: `we find it`,
          result
        });
      }
    });
  },

  updatePict: (req, res) => {
    console.log(req.body);
    Picture.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      (error, result) => {
        if (error) {
          res.status(400).send({
            message: `Picture failed to update`,
            error
          });
        } else {
          res.status(200).send({
            message: `Picture update`,
            result
          });
        }
      }
    );
  },

  deletePict: (req, res) => {
    Picture.findOneAndDelete({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `Picture failed to delete`,
          error
        });
      } else {
        res.status(200).send({
          message: `Picture delete`,
          result
        });
      }
    });
  }
};
