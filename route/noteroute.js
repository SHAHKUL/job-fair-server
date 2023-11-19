const express = require("express");
const router = express.Router();
const Notes = require("../model/note");
const authentication = require("../middleware/auth");


router.get("/get",authentication, async (req, res) => {
  try {
    const data = await Notes.find({ created: req.val });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get/:id",authentication, async (req, res) => {
    const {id}=req.params
  try {
    const data = await Notes.findById({_id:id});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/create",authentication,async (req, res) => {

  try {
    const data = await Notes.create({...req.body, created: req.val});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/update/:id",authentication, async (req, res) => {
    const {id}=req.params
  try {
    const data = await Notes.findByIdAndUpdate({_id:id},{...req.body});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/remove/:id",authentication, async (req, res) => {
    const {id}=req.params
  try {
    const data = await Notes.findByIdAndDelete({_id:id});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports=router