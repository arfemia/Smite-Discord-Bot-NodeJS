// Session API Object Constructor

// Dependencies
const request = require('request')
const util = require('../util')

class SessionAPI {
  constructor (baseUrl, devId, authKey, platform) {
    this.baseUrl = baseUrl
    this.devId = devId
    this.authKey = authKey
    this.platform = platform
    this.id = ''
  }

  exitsts () {
    let sessionId;
    switch (this.platform) {
      case ('smitePC'):
        sessionId = this.id
        break
      case ('smiteXBOX'):
        sessionId = process.env.SMITE_XBOX_SESSION
        break
      case ('smitePS4'):
        sessionId = process.env.SMITE_PS4_SESSION
        break
      case ('paladinsPC'):
        sessionId = process.env.PALADINS_PC_SESSION
        break
      case ('paladinsXBOX'):
        sessionId = process.env.PALADINS_XBOX_SESSION
        break
      case ('paladinsPS4'):
        sessionId = process.env.PALADINS_PS4_SESSION
        break
      case ('realmPC'):
        sessionId = process.env.REALM_PC_SESSION
        break
      case ('realmXBOX'):
        sessionId = process.env.REALM_XBOX_SESSION
        break
      case ('realmPS4'):
        sessionId = process.env.REALM_PS4_SESSION
        break
    }
    return (sessionId !== undefined);
  }

  async generate () {
    try {
      
      const session = await genSession(this.baseUrl, this.devId, util.authHash(this.devId, this.authKey, 'createsession'), this.platform);
      console.log('generate() response: ', session)
      this.id = session.session_id;
      return session.session_id

    
    } catch (e) {
      console.warn('Error in generate(): ', e)
      throw err
    }
    
    
  }

  test () {
    return testSession(this.baseUrl, this.devId, this.authKey, this.platform)
      .then(response => {
        return response
      })
      .catch(err => {
        if (err) throw err
      })
  }

  
}


// Generate a new Session
async function genSession (baseUrl, devId, authHash, platform) {
  let url = baseUrl + 'createsessionJson/' + devId + '/' +
    authHash + '/' + util.getUtcTime()
  return await new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let sessionID = JSON.parse(body)
        console.log('in genSession(): ', sessionID)
        switch (platform) {
          case 'smitePC':
           
            this.id = sessionID.session_id;
            
            resolve(sessionID)
            break
          case 'smiteXBOX':
            process.env.SMITE_XBOX_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'smitePS4':
            process.env.SMITE_PS4_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'paladinsPC':
            process.env.PALADINS_PC_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'paladinsXBOX':
            process.env.PALADINS_XBOX_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'paladinsPS4':
            process.env.PALADINS_PS4_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'realmPC':
            process.env.REALM_PC_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'realmXBOX':
            process.env.REALM_XBOX_SESSION = sessionID.session_id
            resolve(sessionID)
            break
          case 'realmPS4':
            process.env.REALM_PS4_SESSION = sessionID.session_id
            resolve(sessionID)
            break
        }
      } else {
        reject(error)
      }
    })
  })
}

// Test Session ID
function testSession (baseUrl, devId, authKey, platform) {
  let sessionId
  switch (platform) {
    case ('smitePC'):
      sessionId = this.id
      break
    case ('smiteXBOX'):
      sessionId = process.env.SMITE_XBOX_SESSION
      break
    case ('smitePS4'):
      sessionId = process.env.SMITE_PS4_SESSION
      break
    case ('paladinsPC'):
      sessionId = process.env.PALADINS_PC_SESSION
      break
    case ('paladinsXBOX'):
      sessionId = process.env.PALADINS_XBOX_SESSION
      break
    case ('paladinsPS4'):
      sessionId = process.env.PALADINS_PS4_SESSION
      break
    case ('realmPC'):
      sessionId = process.env.REALM_PC_SESSION
      break
    case ('realmXBOX'):
      sessionId = process.env.REALM_XBOX_SESSION
      break
    case ('realmPS4'):
      sessionId = process.env.REALM_PS4_SESSION
      break
  }
  //console.log(process.env.SMITE_PC_SESSION)
  let url = util.genUrl(baseUrl, 'testsession', devId, authKey, sessionId)
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

module.exports = SessionAPI
