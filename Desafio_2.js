import fs from 'fs';

export default class ProductManager {
    constructor(){
        this.path = './files/Products.json';
    }
    
    getProducts = async () => {
        if(fs.existsSync(this.path)){
            const data = await fs.promises.readFile(this.path,'utf-8');
            const products = JSON.parse(data);
            return products;
        }
        return [];
    }

    createProducts = async (product) => {
        const products = await this.getProducts();
        if(products.length==0){
            product.id = 1;
        }else{
            product.id = products[products.length-1].id+1;
        }
        products.push(product);
        await fs.promises.writeFile(this.path,JSON.stringify(products,null,'\t'));
        return product
    }

    updateProducts = async (product) => {
        const products = await this.getProducts();
        try {
            if(products.length==0){
                product.id = 1;
            }else{
                product.id = products[products.length-1].id;
            }
            products.pop(product)
            products.push(product)
            fs.promises.writeFile(this.path,JSON.stringify(products,null,'\t'));
            console.log("The file was saved!")
        }
        catch(err) {
            console.err("no se guardo una ")
        }
    }

    deleteProducts = async (product) => {
        const products = await this.getProducts();
        try {
            products.pop(product)
            fs.promises.writeFile(this.path,JSON.stringify(products,null,'\t'));
            console.log("se borro correctamente")
        }
        catch(err) {
            console.err("no existe, este producto")
        }
    }

}




const productManager = new ProductManager();

const context = async() =>{
    const test = await productManager.getProducts();
    console.log(test)
    let testProduct = {
        name:"pomelo",
        price:"444",
        stock:"111"
    }
    await productManager.createProducts(testProduct)

    const new2Products = await productManager.getProducts();
    console.log(new2Products);
    // await productManager.getProducts();
    // let test2Product = {
    //     name:"manzana",
    //     price:"210",
    //     stock:"4"
    // }


    // await productManager.updateProducts(test2Product)
    // await productManager.getProducts();
    // const newProducts = await productManager.getProducts();
    // console.log(newProducts)

    await productManager.getProducts();
    let test2Product = {
        name:"manzana",
        price:"210",
        stock:"4"
    }


    await productManager.updateProducts(test2Product)
    await productManager.deleteProducts();
    const newProducts = await productManager.getProducts();
    console.log(newProducts)

}

context();