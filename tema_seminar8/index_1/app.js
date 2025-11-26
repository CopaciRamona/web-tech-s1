const express=require('express')
const Book = require('./Book')
const app=express()
const port=3000


const bookRouter=express.Router()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',bookRouter)

let books=[new Book(1,"Dune","sf","Frank Henbert"), new Book(2,"Robison Crusoe","adventure","Daniel Defoe"), new Book(3,"Foundation","sf","Asimov")]

bookRouter.route('/books')
.get((req,res)=>{
    let filteredBooks=[];
    if(req.query.genre){
        filteredBooks=books.filter(x=>x.genre===req.query.genre)
    }else{
        filteredBooks=books;
    }
    res.json(filteredBooks);
})
.post((req,res)=>{

    let newBook;
    if(req.body.id && req.body.name && 
     req.body.genre && req.body.author)
    {
        newBook=new Book(req.body.id, req.body.name, req.body.genre, req.body.author);
        books.push(newBook);
    }else{
        res.status(400).json({message:"Cartea nu este valida"});
    }
    console.log(newBook);
    return res.json(newBook);
})

bookRouter.route('/books/:bookid')
.delete((req,res)=>{
    books=books.filter(e=>e.id!==Number(req.params.bookid))
    return res.json(books);
})

bookRouter.route('/list')
.get((req,res)=>{
    let lista=[];
    lista=books.sort((a,b)=> a.name.localeCompare(b.name))
    res.json(lista);
})

app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})

app.listen(port,()=>{
    console.log('Running on the port ' + port)
})
