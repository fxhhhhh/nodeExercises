const asyncWrapper= (fn) => {
    return async(req,res,next)=>{
        try{
            await(req,res,next);
        }catch(error){
            next(error)
        }
    }
}

module.exports = asyncWrapper
