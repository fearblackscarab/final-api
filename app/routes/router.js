const express=require('express');
const router=express.Router();
const port=process.env.PORT || 3001;

router.get('/',(req,res)=>{
    res.json({
        'All jewelry':`http://localhost:${port}/api/jewelry`
    })
});

router.use('/jewelry',require('./api/jewelryRoutes'));

module.exports=router;