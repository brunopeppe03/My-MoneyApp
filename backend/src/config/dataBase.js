const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const options = {
     useMongoClient: true,
     autoIndex: false,
     reconnectTries: Number.MAX_VALUE,
     reconnectInterval: 500,
     poolSize: 10,
     bufferMaxEntries: 0,
} 
mongoose.Error.messages.general.require = " O atributo '{PATH}' e obrigatorio."
mongoose.Error.messages.Number.min =" o '{VALUE}' informado e menor do que o limite minimo de '{MIN}' "
mongoose.Error.messages.Number.max =" o '{VALUE}' informado e maior do que o limite maximo de '{MAX}' "
mongoose.Error.messages.String.enum = " o {VALUE} NAO E VALIDO."

module.exports = mongoose.connect('mongodb://localhost/mymoney', options)
