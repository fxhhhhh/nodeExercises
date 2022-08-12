const getAllProductsStatic = async(req,res)=>{
    res.status(200).json({msg:'just for testig'})
}

const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:'just testig'})
}


module.exports = {
    getAllProducts,
    getAllProductsStatic,
}