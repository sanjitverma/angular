
export class ProductService{

    product: Product;
    constructor(){
        this.product = new Product();
        this.product.name = "iPhone 7";
        this.product.price = "$500";
        this.product.desc = "This is iphone 7";
    }
    public getProduct(): Product{
        return this.product;
    }
}

export class MockProductService implements ProductService{

    product: Product;
    constructor(){
        this.product = new Product();
        this.product.name = "Samsung";
        this.product.price = "$600";
        this.product.desc = "This is Samsung 7";
    }

    public getProduct(): Product{
        return this.product;
    }
}

export class Product{
    name: string;
    price: string;
    desc: string;
}