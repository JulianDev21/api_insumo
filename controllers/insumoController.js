const Insumo = require ('../models/insumo')

//method GET
const getInsumo = async(req, res) => {
    const insumos =await Insumo.find()
    res.json(insumos)
}



const postInsumo = async (req, res) => {
    let msg = 'Insumo inserted'
    const body = req.body
    try{
        const insumo = new Insumo(body)
        await insumo.save()

    }
    catch(error){
        msg=error
    }
    res.json({msg:msg})
}

const putInsumo = async (req, res) => {
    let msg = 'Insumo updated'
    const { code, nameInsumo, quantity, price } = req.body;
    try{
        
        await Insumo.findOneAndUpdate({code:code},{nameInsumo: nameInsumo, quantity:quantity, price: price})

    }
    catch(error){
        msg=error
    }
    res.json({msg:msg})
}


const deleteInsumo = async (req,res) => {
    const msg= 'Insumo delete'
    id= req.params.id
    try{
        await Insumo.findByIdAndDelete({_id:id})

    } catch(error){
        msg= 'There was a problem while deleting'

    }
    res.json({msg:msg})
}

module.exports ={
    getInsumo,
    postInsumo,
    putInsumo,
    deleteInsumo
}