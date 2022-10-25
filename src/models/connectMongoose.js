'use strict'

//import mongoose from 'mongoose'
const mongoose = require('mongoose')

/**
 * mongoose connection hereda de la clase EventEmitter de Node
 * on: cada vez que ocurre el evento
 * once: solo la primera vez que ocurre el evento
 */

//Cuando haya un error de conexión (error)
mongoose.connection.on('error', err => {
  console.log('Error de conexión', err);
  //Fundamentos 5- 3:14
  //process.exit(1);
});
//Cuando se conecta  correctamente (open)
mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB en', mongoose.connection.name);
})
//https://mongoosejs.com/docs/connections.html#connection-string-options
const connectionPromise = mongoose.connect(process.env.MONGODB_CONNECTION_STR, {})

/**
 * Ahora no necesito la promesa, así que
 * exportamos la promesa de la conexión (https://mongoosejs.com/docs/connections.html)
 */

export default connectionPromise
