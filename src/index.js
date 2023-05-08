import express  from "express";
import fichaRoute from './routes/ficha.routes.js'


const app=express()

app.use(express.json())
app.use(fichaRoute)

app.listen(3000)