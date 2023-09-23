const express = require('express');
const path = require('path');
const app = express();


app.get('/web',(req,res) =>{
    const pathName = req.query.name;

    // if(pathName == 'home'){
    //     res.sendFile(path.join(__dirname, 'home.html'))
    // } else if(pathName == 'about'){
    //     res.sendFile(path.join(__dirname, 'about.html'))
    // } else if(pathName == 'contact'){
    //     res.sendFile(path.join(__dirname, 'contact.html'))
    // } else{
    //     res.send('Page Not Found')
    // }

    //
    //
    //
    //
    res.sendFile(path.join(__dirname,`${pathName}.html`))
   console.log(pathName);
   //res.redirect(`/${pathName}`)
})

// app.get('/web/*',(req,res) =>{
//     res.send('Page not found')
// })

app.listen(8989);