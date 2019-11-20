//使用 require() 引入 express module
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "pug");

app.get("/", function(req, res){
   res.send("<h1>Hello, My Server</h1>");
})

// assignment 1-3
app.get("/sum.html", function(req, res){
    res.sendFile(path.join(__dirname+'/sum.html'));
})

app.get("/getData", (req, res) => {
    let input = req.query.num;
    let result;
    if(input == "") {
        result = 'Lack of Paramete';
    } else if(isNaN(input)) {
        result = 'Wrong Parameter';
    } else {
        result = `${(( 1 + Number(input)) * Number(input)) / 2}`;    
    }     
    res.send(`${result}`)
})

//assignment 4 Optional
app.get("/myName", (req, res) => {
    const name = req.cookies.name;
    res.render('myName',{name})
});

app.get("/trackName", (req, res) => {
    const name = req.cookies.name;
    res.render('trackName');
});

app.post("/trackName", (req, res) => {    
    res.cookie('name', req.body.name);
    res.redirect('/myName');
});

app.post("/goodbye", (req, res) => {
    res.clearCookie('name', req.body.name);
    res.redirect('/trackName');
})

app.listen(3000, function(){
    console.log("伺服器已經啟動在 http://localhost:3000/");
})