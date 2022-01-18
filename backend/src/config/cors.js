module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Origin', 'GET, POST, OPTION, PUT, PATCH, DELETE ')
    res.header('Acces.Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}