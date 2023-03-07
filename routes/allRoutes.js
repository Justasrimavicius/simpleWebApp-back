var express = require('express');
var router = express.Router();

router.get('/Q1', (req,res,next)=>{
    res.send({answer: 'The Christianization of Lithuania (Lithuanian: Lietuvos krikštas) occurred in 1387, initiated by King of Poland and Grand Duke of Lithuania Władysław II Jagiełło and his cousin Vytautas the Great.'})
});
router.get('/Q2', (req,res,next)=>{
    res.send({answer: 'Franklin Delano Roosevelt was born on January 30, 1882, in the Hudson Valley town of Hyde Park, New York.'})
});
router.get('/Q3', (req,res,next)=>{
    res.send({answer: `At 4:30 a.m. on April 12, 1861, Confederate troops fired on Fort Sumter in South Carolina's Charleston Harbor.`})
});
router.get('/Q4', (req,res,next)=>{
    res.send({answer: `The explorer Christopher Columbus made four trips across the Atlantic Ocean from Spain: in 1492, 1493, 1498 and 1502.`})
});
router.get('/Q5', (req,res,next)=>{
    res.send({answer: `German goldsmith Johannes Gutenberg is credited with inventing the printing press around 1436, although he was far from the first to automate the book-printing process.`})
});
router.get('/Q6', (req,res,next)=>{
    res.send({answer: `Napoleon Bonaparte died on May 5, 1821, on the remote South Atlantic island of St. Helena.`})
});
router.get('/Q7', (req,res,next)=>{
    res.send({answer: `The wheel was invented in the 4th millennium BC in Lower Mesopotamia(modern-​​day Iraq), where the Sumerian people inserted rotating axles into solid discs of wood.`})
});
router.get('/Q8', (req,res,next)=>{
    res.send({answer: `The Mongol Empire existed during the 13th and 14th centuries and it is recognized as being the largest contiguous land empire in history.`})
});
router.get('/Q9', (req,res,next)=>{
    res.send({answer: `Neil Armstrong is known as the first of 12 human beings to walk on the Moon.`})
});
router.get('/Q10', (req,res,next)=>{
    res.send({answer: `Hicham El Guerrouj is currently holding the world record one mile run - 3 minutes 43 seconds.`})
});
module.exports = router;
