


const errorHandler = (error, req, res, next) => {
    console.log("====================")
    return res.status(400).send(error.message)
}

module.exports = errorHandler;