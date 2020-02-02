'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
  //relacionamento com o usuario
  user() {
    return this.belongsTo('app/Models/User')
  }
}

module.exports = Tweet
