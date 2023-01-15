const dotenv = require("dotenv")
dotenv.config({path:`${__dirname}/../config.env`});

const express = require('express');
const bodyParser = require('body-parser')
const corse = require('cors');
const path = require('path');

const app = express();
port = process.env.PORT || 3010;

const client = require('./mongodb')
const db = client.db("portfolio");

//------ for mongoAtlas (cloud) ------
// const mongoose = require("mongoose")
// require("./mongodb")
// const db = mongoose.connection

app.use(bodyParser.json())

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const reactBuildPath = path.join(__dirname, '../my-portfolio/build');
app.use(express.static(reactBuildPath));

app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./my-portfolio/build/index.html"),
  );
});

app.post('/welcomePage', (req,res) => {
    db.collection('welcomePage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/aboutPage', (req,res) => {
    db.collection('aboutPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/educationPage', (req,res) => {
    db.collection('educationPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/experiencePage', (req,res) => {
    db.collection('experiencePage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/skillsPage', (req,res) => {
    db.collection('skillsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/projectsPage', (req,res) => {
    db.collection('projectsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/projectsPage', (req,res) => {
    db.collection('projectsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/achievementsPage', (req,res) => {
    db.collection('achievementsPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

app.post('/contactPage', (req,res) => {
    db.collection('contactPage').find({}).toArray((error,result) => {
        if(error){
            console.log(error);
        }
        res.send(result);
    })
}, (error) => {
    res.send(error);
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("my-portfolio/build"));
}

app.listen(port, () => {
    console.log(`server listening on the port: ${port}`);
})
