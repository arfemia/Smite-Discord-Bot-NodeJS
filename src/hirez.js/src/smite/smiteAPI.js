// Smite Data API Methods

// Dependencies
const request = require('request')
const util = require('../util')
const SessionAPI = require('../sessions/sessionAPI')

const API = {
  PC: 'https://api.smitegame.com/smiteapi.svc/',
  XBOX: 'https://api.xbox.smitegame.com/smiteapi.svc/',
  PS4: 'http://api.ps4.smitegame.com/smiteapi.svc/'
}

class Smite {
  constructor(args, platform) {
    this.devId = args.devId
    this.authKey = args.authKey
    this.smiteUrl = API[platform.toUpperCase()]
    this.platform = platform.toUpperCase()
    this.session = new SessionAPI(this.smiteUrl, this.devId, this.authKey, `smite${this.platform}`)
    
  }

  async init() {
    const tested = await this.session.test()

    if (!tested || tested?.startsWith('Invalid session id.') || !this.session.exists()) {
      const id = await this.session.generate()
      console.log('Generating Smite API session with id: ', id)

      return this;
    }

    return 'error'

  }

  getFriends(userName) {
    let url = util.genUrl(this.smiteUrl, 'getfriends', this.devId, this.authKey, this.session.id) + '/' + userName
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getEsportsProLeagueDetails() {
    let url = util.genUrl(this.smiteUrl, 'getesportsproleaguedetails', this.devId, this.authKey, this.session.id)
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getGodRanks(userName) {
    let url = util.genUrl(this.smiteUrl, 'getgodranks', this.devId, this.authKey, this.session.id) + '/' + userName
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  async getGods() {
    console.log('in get gods: ', this)
    let url = util.genUrl(this.smiteUrl, 'getgods', this.devId, this.authKey, this.session.id) + '/1'
    return await new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getGodSkins(godId) {
    let url = util.genUrl(this.smiteUrl, 'getgodskins', this.devId, this.authKey, this.session.id) + '/' + godId + '/1'
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getGodRecommendedItems(godId) {
    let url = util.genUrl(this.smiteUrl, 'getgodrecommendeditems', this.devId, this.authKey, this.session.id) + '/' + godId + '/1'
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getItems() {
    let url = util.genUrl(this.smiteUrl, 'getitems', this.devId, this.authKey, this.session.id) + '/1'
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getMatchDetails(matchId) {
    let url = util.genUrl(this.smiteUrl, 'getmatchdetails', this.devId, this.authKey, this.session.id) + '/' + matchId
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getMatchPlayerDetails(matchId) {
    let url = util.genUrl(this.smiteUrl, 'getmatchplayerdetails', this.devId, this.authKey, this.session.id) + '/' + matchId
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getMatchIdsByQueue(queue, date, time) {
    let url = util.genUrl(this.smiteUrl, 'getmatchidsbyqueue', this.devId, this.authKey, this.session.id) + '/' + queue +
      '/' + date + '/' + time
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getLeagueLeaderBoard(queue, tier, season) {
    let url = util.genUrl(this.smiteUrl, 'getleagueleaderboard', this.devId, this.authKey, this.session.id) + '/' + queue +
      '/' + tier + '/' + season
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getGodLeaderBoard(godId, queue) {
    let url = util.genUrl(this.smiteUrl, 'getgodleaderboard', this.devId, this.authKey, this.session.id) + '/' + godId +
      '/' + queue
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getLeagueSeasons(queue) {
    let url = util.genUrl(this.smiteUrl, 'getleagueseasons', this.devId, this.authKey, this.session.id) + '/' + queue
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getMatchHistory(userName) {
    let url = util.genUrl(this.smiteUrl, 'getmatchhistory', this.devId, this.authKey, this.session.id) + '/' + userName
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getMotd() {
    let url = util.genUrl(this.smiteUrl, 'getmotd', this.devId, this.authKey, this.session.id)
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getPlayer(userName) {
    let url = util.genUrl(this.smiteUrl, 'getplayer', this.devId, this.authKey, this.session.id) + '/' + userName
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getPlayerStatus(userName) {
    let url = util.genUrl(this.smiteUrl, 'getplayerstatus', this.devId, this.authKey, this.session.id) + '/' + userName
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getQueueStats(userName, queue) {
    let url = util.genUrl(this.smiteUrl, 'getqueuestats', this.devId, this.authKey, this.session.id) + '/' + userName +
      '/' + queue
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getTeamDetails(teamId) {
    let url = util.genUrl(this.smiteUrl, 'getteamdetails', this.devId, this.authKey, this.session.id) + '/' + teamId
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getTeamPlayers(teamId) {
    let url = util.genUrl(this.smiteUrl, 'getteamplayers', this.devId, this.authKey, this.session.id) + '/' + teamId
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getTopMatches() {
    let url = util.genUrl(this.smiteUrl, 'gettopmatches', this.devId, this.authKey, this.session.id)
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  searchTeams(teamName) {
    let url = util.genUrl(this.smiteUrl, 'searchteams', this.devId, this.authKey, this.session.id) + '/' + encodeURIComponent(teamName)
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getPlayerAchievements(userId) {
    let url = util.genUrl(this.smiteUrl, 'getplayerachievements', this.devId, this.authKey, this.session.id) + '/' + userId
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  getPatchInfo() {
    let url = util.genUrl(this.smiteUrl, 'getpatchinfo', this.devId, this.authKey, this.session.id)
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }

  ping() {
    let url = this.smiteUrl + 'pingjson'
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(console.error(body))
        }
      })
    })
  }

  getDataUsed() {
    let url = util.genUrl(this.smiteUrl, 'getdataused', this.devId, this.authKey, this.session.id)
    return new Promise(function (resolve, reject) {
      request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }
}

module.exports = Smite
