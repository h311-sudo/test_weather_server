const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const wInfo = require('./utils/weather');

app.use(express.static(path.join(__dirname,'/../public')));


app.set('view engine' ,'hbs');
app.set('views', path.join(__dirname,'/../templates/views'));
hbs.registerPartials(path.join(__dirname,'/../templates/partials'))

app.get('',(req,res) =>{

    res.render('index',{
        name:'hell',
        title:'fucker'
    });

});

app.get('/about',(req,res) =>{
    res.render('about' ,{
        name:'you fucking asshole',
        title:'motherfucker hell'
    });
});

app.get('/help',(req,res) =>{
    res.render('help',{
        name:'help',
        title:'help me!'
    });
})

app.get('/weather' ,(req,res) =>{
    console.log(req.query);
    if(!req.query.address){
        return res.send('you must provide a address!')
    }
    wInfo.weatherInfo(req.query.address).then((response) =>{
    if(response.error)
    {
       return  res.send(response.error);
    }
    res.send({
        location:response.location.name,
        country:response.location.country,
        lattiud:response.location.lat,
        longitud:response.location.lon,
        currentweather:response.current

    });
    })
});

app.get('/products', (req,res) =>{
    console.log(req.query);
    res.send('hell');
})
app.get('/help/*' ,(req,res) =>{
    res.render('404',{
        title:'more help?404 not found!',
        name:'hell'
    })
})
app.get('*' ,(req,res) =>{
    res.render('404',{
        title:'404 not found!',
        name:'hell'
    })
});
app.listen(3001,() =>{
    console.log('server is running!');
});


