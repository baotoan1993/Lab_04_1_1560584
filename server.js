var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'))

app.listen(3000, ()=>{
    console.log('Lang nghe 3000')
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/cong/:a/:b', (req, res)=>{
    var a = parseInt(req.params['a']);
    var b = parseInt(req.params['b']);

    var result = a + b;
    res.send(result.toString());
})

app.get('/tru/:a/:b', (req, res)=>{
    var a = parseInt(req.params['a']);
    var b = parseInt(req.params['b']);

    var result = a - b;
    res.send(result.toString());
})
app.get('/nhan/:a/:b', (req, res)=>{
    var a = parseInt(req.params['a']);
    var b = parseInt(req.params['b']);

    var result = a * b;
    res.send(result.toString());
})
app.get('/chia/:a/:b', (req, res)=>{
    var a = parseInt(req.params['a']);
    var b = parseInt(req.params['b']);

    var result = a / b;
    res.send(result.toString());
})