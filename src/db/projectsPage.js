const client = require('../mongodb')
const databaseName = 'portfolio'
const db = client.db(databaseName)

db.collection('projectsPage').insertMany([
    {
        project_one: [
            "My-Portfolio",
            "MERN, MEAN, Java Full Stack",
            "https://my-portfolio-in-mern.cyclic.app",
            "https://my-portfolio-in-mean.cyclic.app",
            "-> I made this portfolio in 3 different technologies like MERN, MEAN and Java Full Stack.",
            "-> My aim was just to showcase my skillset and my hardwork. I can learn any technology according to the requirements."
        ]
    },
    {
        project_two: [
            "Chat App", 
            "Node.js, Express.js, Socket.io, HTML, CSS", 
            "http://mak-node-chat-app.herokuapp.com", 
            "", 
            "-> It is a real time web chat application where two or more clients can send the information each others with the help of server.", 
            "-> For example, there are 3 clients C1, C2, C3 and they want to talk to each other. So, first of they will enter their name and room name (e.g. chat-room), then they can talk to each other in the \"chat-room\"."],
    },
    {
        project_three: [
            "Weather App", 
            "Node.js, Express.js, HTML, CSS", 
            "https://mak-weather.herokuapp.com", 
            "", 
            "-> For example, there are 3 clients C1, C2, C3 and they want to talk to each other. So, first of they will enter their name and room name (e.g. chat-room), then they can talk to each other in the \"chat-room\".", 
            ""],
    },
    {
        project_four: [
            "Expenses List", 
            "React.js, HTML, CSS", 
            "https://mak-expenses-list.herokuapp.com", 
            "", 
            "-> It shows the expense graph and the expenses list where user can add his expense in expense list.", 
            "-> In this project expense graph shows monthly and highest monthly user expenses."],
    }
]);



// const mongoose = require("mongoose")
// require("../mongodb")
// const conn = mongoose.connection

// const projectsData = [
//     {
//         _id: new ObjectId(),
//         project_one: [
//             "Chat App", 
//             "Node.js, Express.js, Socket.io, HTML, CSS", 
//             "http://mak-node-chat-app.herokuapp.com", 
//             "", 
//             "-> It is a real time web chat application where two or more clients can send the information each others with the help of server.", 
//             "-> For example, there are 3 clients C1, C2, C3 and they want to talk to each other. So, first of they will enter their name and room name (e.g. chat-room), then they can talk to each other in the \"chat-room\"."]
//     },
//     {
//         _id: new ObjectId(),
//         project_two: [
//             "Weather App", 
//             "Node.js, Express.js, HTML, CSS", 
//             "https://mak-weather.herokuapp.com", 
//             "", 
//             "-> It shows weather by using weather API that is weatherstack.com and another API that is mapbox.com which is used for finding the location at which location user wants the weather information.", 
//             ""]
//     },
//     {
//         _id: new ObjectId(),
//         project_three: [
//             "Expenses List", 
//             "React.js, HTML, CSS", 
//             "https://mak-expenses-list.herokuapp.com", 
//             "", 
//             "-> It shows the expense graph and the expenses list where user can add his expense in expense list.", 
//             "-> In this project expense graph shows monthly and highest monthly user expenses."]
//     }
// ]

// conn.collection("projectsPage").insertMany(projectsData);