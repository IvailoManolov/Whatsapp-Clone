// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'

// app config
const application = express()
const applicationPort = process.env.PORT || 9000


const pusher = new Pusher({
    appId: "1415419",
    key: "f595a437b6a7d9bb7850",
    secret: "ad08f072461605ad63d2",
    cluster: "eu",
    useTLS: true
});

// middlewares
application.use(express.json())

// DB config
const connectionURL = 'mongodb+srv://admin:admin@cluster0.4mkkx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionURL , () => {
    console.log('Connecting to the DB ... ')
})

// ???

const db = mongoose.connection

db.once("open" , () => {
    console.log("Ready for changes")

    const msgCollection = db.collection("messagecontents")

    const changeStream = msgCollection.watch()

    changeStream.on("change" , (change) => {

        if(change.operationType === 'insert')
        {
            const messageDetails = change.fullDocument

            pusher.trigger('messages','inserted', {
                name : messageDetails.name,
                message : messageDetails.message
            })

        }

        else
        {
            console.log('Error triggering Pusher')
        }

    })

})

// api route'
application.get('/',(req,res) => res.status(200).send('hello world'))

application.post('/messages/new' , (req,res) => {
    const dbMessage = req.body

        Messages.create(dbMessage , (err,data) => {
            if(err)
            {
                res.status(500).send(err)
                console.log("error")
            }
            else
            {
                res.status(201).send(data)
            }
        })
})

application.get('/messages/sync' , (req,res) => {

    Messages.find((err,data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(200).send(data)
    })

})

// listen
application.listen(applicationPort , () =>
{
    console.log(`Listening on localhost : ${applicationPort}`)
})