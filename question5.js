products = [{id: 1, name: "Laptop", price: 1200}, 
    {id: 2, name: "Mouse", price: 25}, {id: 3, name: "Keyboard", price: 75}];
    console.log(products.find(function(products){
        return  products.id===2
    }))

    console.log(products.findIndex(function(product){
        return product.price >1000
    }))
