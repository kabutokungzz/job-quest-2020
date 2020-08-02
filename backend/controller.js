const express = require("express");
const router = express.Router();
require('./db');
const model_backend = require('./schema');
const { json } = require("express");


//ทำ Middleware 
const loginMiddleWare = (req, res, next) => {
    // console.log(JSON.stringify(req.headers));
    if (req.headers.username === "kitipob" 
    && req.headers.password === "watanaluk") next();
    else res.send("Wrong username and password");
 };

router.get('/joke', async (req, res) => {
    // console.log(JSON.stringify(req.headers.connection));
    
    await model_backend.find((err, doc) => {
        if (err) res.status(200).json({ result: "failed" })
        res.status(200).json({ result: "success", data: doc });
    });
});

router.post('/joke',loginMiddleWare, async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const detail = req.body.detail;
    await model_backend.create(req.body, (err, doc) => {
        if (err) res.status(200).json({ result: 'Failed' });
        res.status(200).json({ result: "success", id: id, title: title, detail: detail });
    });

});


router.get('/joke/:id', async (req, res) => {

    await model_backend.findOne({id:req.params.id},(err,doc)=>{
        if (err) res.status(200).json({ result: 'Failed or Not found' });
        res.status(200).json({ result: "success", data: doc });
    });
});

router.delete('/joke/:id',loginMiddleWare, async (req, res) => {

    await model_backend.deleteOne({id:req.params.id},(err)=>{
        if (err) res.status(200).json({ result: 'Failed or Not found to delect' });
        res.status(200).json({ result: 'success delect',id: req.params.id });
    })

});

router.post('/joke/:id/like', async (req, res) => {
    // console.log(req.params.id)
    await model_backend.updateOne({id:req.params.id},{$inc: {like:1}},(err)=>{ 
        if (err) res.status(200).json({ result: 'Failed or Not found to delect' });
        res.status(200).json({ result: 'success update like',id:req.params.id });
    })

});

router.post('/joke/:id/dislike', async (req, res) => {

    await model_backend.updateOne({id:req.params.id},{$inc: {dislike:1}},(err)=>{ 
        if (err) res.status(200).json({ result: 'Failed or Not found to delect' });
        res.status(200).json({ result: 'success update dislike',id:req.params.id });
    })
});



module.exports = router