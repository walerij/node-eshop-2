const express = require('express')

const exphbs=require('express-handlebars')

const hbs = exphbs.create({
    defaultLayout:'main',
    extname:'hbs'
    
})

const productRouter = require('./routes/productRouter')

const app = express()
const port = 3000

app.engine('hbs',hbs.engine)

app.set('view engine','hbs')
app.set('views','views')

app.use('/products', productRouter)


app.get('/', (req, res) => {
  res.render('index',{
      title: "Главная"
    })
})


app.listen(port, () => {
  console.log(`server eshop started at http://localhost:${port}`)
})
