export class ProductService{
    public getProduct(): Product{
        var product: Product = new Product();
        product.name = "iPhone 7";
        product.price = "$500";
        product.desc = "This is iphone 7";
        return product;
    }
}

export class Product{
    name: string;
    price: string;
    desc: string;
}