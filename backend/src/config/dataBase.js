const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.require = " O atributo '{PATH}' e obrigatorio."
mongoose.Error.messages.Number.min =
     " o '{VALUE}' informado e menor do que o limite minimo de '{MIN}' "
mongoose.Error.messages.Number.max =
     " o '{VALUE}' informado e maior do que o limite maximo de '{MAX}' "
mongoose.Error.messages.String.enum = 
     " o {VALUE} NAO E VALIDO."

