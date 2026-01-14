const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1];
        
        const decodedtoken = jwt.verify(token, process.env.SECRET_KEY);
        
        req.userId = decodedtoken.userId;

        next();
    }
    catch(error){
        res.status(401).send({
            message : error.message,
            success : false
        });
    }
}