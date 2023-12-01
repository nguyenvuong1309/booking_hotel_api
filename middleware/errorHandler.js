


const errorHandler = (error, req, res, next) => {
    //res.status(400).send(error.message)
    res.status(404).json({ error: "error" })
}

module.exports = errorHandler;