import express from 'express'
import cors from 'cors'
import { randomBytes } from 'crypto'
import axios from 'axios'

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
})


app.listen(4000, () => {
    console.log('Listenig on 4000')
})

