import express from 'express'
import json from 'body-parser'
import { randomBytes } from 'crypto'

const app = express()
app.use(json())

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

