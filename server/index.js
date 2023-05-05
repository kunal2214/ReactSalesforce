const express = require('express')
const jsforce = require('jsforce')
const cors= require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
const PORT  = 5000
const {SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env

const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
})
conn.login(SF_USERNAME, SF_PASSWORD+SF_TOKEN, (err, userInfo) => {
    if(err){
        console.error(err)
    } else{
        console.log("User Id:" + userInfo.id)
        console.log("Org Id:" + userInfo.organizationId)
    }
})

app.get('/', (req,res)=> {
    // res.send("salesforce connected with node js")
    conn.query("SELECT Id, Name FROM Account", (err, result) => {
        if(err){
            res.send(err)
        } else{
            console.log("Toal Records:" + result.totalSize)
            res.json(result.records )
        }
    })
})
app.get('/contact', (req,res)=> {
    // res.send("salesforce connected with node js")
    conn.query("SELECT  Id, Name, Phone, Account.Name FROM Contact", (err, result) => {
        if(err){
            res.send(err)
        } else{
            console.log("Toal Records:" + result.totalSize)
            res.json(result.records )
        }
    })
})
app.get('/opportunity', (req,res)=> {
    // res.send("salesforce connected with node js")
    conn.query("SELECT Id, Name FROM Opportunity", (err, result) => {
        if(err){
            res.send(err)
        } else{
            console.log("Toal Records:" + result.totalSize)
            res.json(result.records )
        }
    })
})

 app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
 })