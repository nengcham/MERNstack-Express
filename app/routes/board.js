import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import BoardService from '../services/board.js'

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

app.post('/write', cors(corsOptions), (req, res) => {
    BoardService().write(req, res)
})

app.get('/list', cors(corsOptions), (req, res) => {
    BoardService().list(req, res)
})


export default app
