const axios=require('axios');
const express =require('express');
const router=express.Router();
const Api_Key=process.env.API_Key;
router.get('/',async function(req,res){
    try{
    const news = await axios.get(
            `https://newsapi.org/v2/everything?q=apple&from=2021-10-03&to=2021-10-03&sortBy=popularity&apiKey=${Api_Key}`
        );
        //console.log(news.data.articles);
        res.render('home', { articles : news.data.articles })
    
}catch(err){
    console.log('error is coming');
    if(err.response) {
        res.render('home', { articles : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    } else if(err.requiest) {
        res.render('home', { articles : null })
        console.log(err.request)
    } else {
        res.render('home', { articles : null })
        console.error('Error', err.message)
    }
}
});
module.exports= router;