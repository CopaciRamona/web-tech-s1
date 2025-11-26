
const express = require("express");
const { departments } = require("../db");
const router = express.Router();

const write=(req,res,next)=>{
    console.log(`Url-ul cererii HTTP este : ${req.method} ${req.url}`);
    next();
}

router.get("/departments",write, (req, res) => {
      throw (new Error('newly'))
    res.status(200).json(departments);
});

router.get("/departments/:id",write, (req, res) => {
    const department = departments.find(
        (department) => department.id === Number(req.params.id)
    );
    if (department) {
        res.status(200).json(department);
    } else {
        res.status(404).json({ error: "Entity not found" });
    }
});

router.get("/status",write,(req,res)=>{
    res.status(200).json({message:"Mesajul a fost afisat cu succes"})
})

module.exports = router;