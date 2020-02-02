'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up () {
    this.create('tweets', (table) => {
      table.increments()
      table
        .integer('user_id')
        //não pode ser abaixo de 0
        .unSigned()
        .notNullable()
        //*forekey
        //campo que quer referenciar
        .references('users')
        //ação utilizar
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.tweet('content', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
