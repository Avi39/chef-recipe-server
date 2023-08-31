const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const chefs = require('./data/chief.json');
const dishes = require('./data/dishes.json');
const nonveg= require('./data/nonveg.json');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// chef data
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
app.get('/chefs/:id',(req,res)=>{
    const id = req.params.id;
    const selectedChefs = chefs.find(n=>n.id === id);
    res.send(selectedChefs);
})
// dishes Data
app.get('/dishes',(req,res)=>{
    res.send(dishes);
})
app.get('/nonveg',(req,res)=>{
  res.send(nonveg);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})