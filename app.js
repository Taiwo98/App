const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

app.use('/public',(express.static(path.join(__dirname, 'static'))));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});




app.listen(port);