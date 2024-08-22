const express = require ('express')
const dbConnection = require('../database/config')
const { getInsumo, postInsumo, putInsumo, deleteInsumo} = require('../controllers/insumoController')

class Server{
    constructor(){
    this.app = express()
    this.listen()
    this.dbConnection()
    this.pathInsumo = "/api/insumo"
    this.route()
    
    }

    route (){
        this.app.use(express.json())
        this.app.get(this.pathInsumo, getInsumo)
        this.app.post(this.pathInsumo, postInsumo)
        this.app.put(this.pathInsumo, putInsumo)
        this.app.delete(this.pathInsumo+'/:id', deleteInsumo)
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running`)
        })
    }

    async dbConnection(){ // call connet to database
        await dbConnection()
    }
}

module.exports = Server