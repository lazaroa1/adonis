'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tweet = use('app/Models/Tweet')

class TweetController {

  async index () {
    const tweets = await Tweet.query().with('user').fetch()

    return tweets
  }

  async store ({ request, auth, response }) {
    const data = await Tweet.only(['content'])
    const tweet = await Tweet.creat({user_id: auth.user.id, ...data})

    return tweet
  }

  async show ({ params, request, response, view }) {
    const tweet = await Tweet.findOrFail(params.id)

    if(tweet.user.id !== auth.user.id)

    return tweet
  }

  async destroy ({ params, auth, response }) {
    const tweet = await Tweet.findOrFail(params.id)

    await tweet.delete()
  }
}

module.exports = TweetController
