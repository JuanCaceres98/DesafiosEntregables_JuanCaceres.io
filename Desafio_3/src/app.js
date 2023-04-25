import express from "express";

const app = express();

app.use(express.urlencoded({extended:true}))

const products = [{
    name:"banana",price:"120",stock:"12",id:"1"
},{name:"manzana",price:"120",stock:"12",id:"2"
},{name:"naranja",price:"120",stock:"12",id:"3"
},{name:"uvas",price:"120",stock:"12",id:"4"
},{name:"pomelo",price:"120",stock:"12",id:"5"
},{name:"cerveza",price:"120",stock:"12",id:"6"
},{name:"vino",price:"120",stock:"12",id:"7"
},{name:"fernet",price:"120",stock:"12",id:"8"
},{name:"vodka",price:"120",stock:"12",id:"9"
},{name:"whisky",price:"120",stock:"12",id:"10"},
]


// devuelve el id en rango
app.get('/products',(req,res)=>{
    let id = req.query.id;
   if(!id||(id>10 || id<=0)) return res.send({products})
    let idFiltrados = products.filter(product=>product.id<=5);
    res.send({products:idFiltrados})
    //  let idFiltrados2 = products.filter(product=>product.id===id);
    //  res.send({products:idFiltrados2})
    // let id2 = req.query.id;
    // if(!id2||(id2>10 || id2<=0)) return res.send({products})
    //  let idFiltrados2 = products.filter(product=>product.id<=5);
    //  res.send({products:idFiltrados2})


})
// solo id
app.get('/product/:id',(req,res)=>{
    
})


app.listen(8080,()=>console.log('Listening on PORT 8080'))

    // const search = Object.keys(req.query)[0];
    // console.log(search);

    // const product = products.find(p=>p[search]===req.query[search]);
    // const limit = products.filter(product => product.id <=5)
    // console.log(limit)

    // res.send(product)


