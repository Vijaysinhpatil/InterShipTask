import express from 'express'
import cors from 'cors'
const app = express();
const PORT = 4004;

// Enable CORS
app.use(cors());

// Your existing middleware and routes
app.use(express.json());

app.get('/api/intern' , (req , res) => {
   
    res.json({
        name : "Vijaysinh",
        refererralCode : "vijaysinh2005",
        donationsRaised : 1500
    })
})

app.get('/api/leaderboard' , (req , res) => {
  
    res.json([
            { name: "Aryan", donationsRaised: 2500 },
            { name: "Vijaysinh", donationsRaised: 1500 },
            { name: "Snehal", donationsRaised: 1000 },
            { name: "Priya", donationsRaised: 2700 },
            { name: "Rohit", donationsRaised: 1200 },
            { name: "Anjali", donationsRaised: 1800 },
            { name: "Karan", donationsRaised: 900 },
            { name: "Meera", donationsRaised: 2100 },
            { name: "Rahul", donationsRaised: 1300 },
            { name: "Tanvi", donationsRaised: 1600 },
            { name: "Aditya", donationsRaised: 1100 },
            { name: "Neha", donationsRaised: 2200 },
            { name: "Dev", donationsRaised: 1400 },
            { name: "Ishita", donationsRaised: 2000 },
            { name: "Manav", donationsRaised: 800 }

    ])
})

app.listen(PORT , () => {
    console.log(`Server is Running at ${PORT} PORT`);
})