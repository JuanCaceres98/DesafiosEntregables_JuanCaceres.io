class ProductManager {
    constructor(){
        this.products = [];
    }
    
    addProducts = function ({nombre, description, price, thumbnail, code, stock}) {
        const product = {
            nombre, description, price, thumbnail, code, stock
        }
        if(this.products.length===0){
            product.id = 1;
        }else{
            product.id = this.products[this.products.length-1].id+1;
        }
        this.products.push(product);
    }

    getProducts = () => {
        return this.products;
    }

   getProductById = () =>{
       return product.id
   }

}

const productManager = new ProductManager()

const testProduct = {
    nombre:"banana",
    price:"15",
    stock:"20"
}

productManager.addProducts(testProduct);
console.log(productManager.getProducts())
