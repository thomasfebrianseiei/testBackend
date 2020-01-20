const express = require("express");
const router = express.Router();
const {addPicture,getPict,updatePict,deletePict} = require ("../controller/pictures");

router.post("/", addPicture);
router.get("/:_id", getPict);
router.put("/:_id", updatePict);
router.delete("/:_id", deletePict);

module.exports = router;
