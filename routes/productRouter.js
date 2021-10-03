const {Router} = require("express")

const router = Router()

router.get('/',(req,res)=>{
    res.render('products',{
        title: "Товары"
    })
})

router.get('/add',(req,res)=>{
    res.render('add-product',{
        title: "Добавить товар"
    })
})

module.exports =router