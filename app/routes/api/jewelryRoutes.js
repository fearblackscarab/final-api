const express=require('express');
const router=express.Router();

// destructuring
const {mainDao:dao}=require('../../daos/dao')

// api/film
router.get('/', (req,res)=>{
    dao.findAll(res,dao.table)
});

router.get('/:id',(req,res)=>{
    dao.findById(res,dao.table,req.params.id)
});

router.get('/group/:type', (req,res)=>{
    dao.findByType(res,dao.table,req.params.type)
});

router.post('/create',(req,res)=>{
    dao.create(req,res)
});

router.patch('/update/:id',(req,res)=>{
dao.update(req,res)
});

module.exports=router;