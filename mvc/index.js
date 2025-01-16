import express from "express"

const app=express()

import cors from "cors"

import { config } from "dotenv"

app.use(express.json())
app.use(cors())
config()

import "./config/config.js"

import { route } from "./routers/router.js"

app.use("/featuredProducts",route)

app.listen(2030,()=>{
    console.log("bu app 2030 portunda dinlenilir")
})