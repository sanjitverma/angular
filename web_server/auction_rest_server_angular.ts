import * as express from  "express";
import * as path from "path";
const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

class Product{
    id: number;
    title: string;
    price: number;

    constructor(id, title, price){
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

const productList: Array<Product> = [
    new Product(0, "First Product", 25.89),
    new Product(1,"Second Product", 12.67),
    new Product(2, "Third Product", 45.98)
];

function getProductByID(id: number): Product{
    return productList.find(p => p.id === id);
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.html'));
});

app.get('/products', (req, res)=>{
    console.log("Received request for "+ req.path);
    res.json(productList)});

app.get('/products/:id', (req, res)=>{
    console.log("Received request for single product "+ req.path);
    res.send(getProductByID(parseInt(req.params.id)));
});

app.get('/reviews', (req, res)=>{
    res.send("Received request for reviews...")});


const server = app.listen(8000, "localhost", () => {
    const {address, port } = server.address();
    console.log("Listening on http://localhost:"+port);
})
