const express=require('express');

// import security
const helmet=require('helmet');
const cors=require('cors');

const server=express().use(helmet()).use(cors()).use(express.json()).use(express.urlencoded({extended: true}));

const router=require('./app/routes/router');

server.use('/api',router);

const port=process.env.PORT || 3001;
server.listen(port,()=>{
    console.log(`port:${port} is running`)
});