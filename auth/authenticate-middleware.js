/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jsonwebtoken = require('jsonwebtoken')

const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
const token = req.headers.authorization

  if(token) {
    jsonwebtoken.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({message: 'nice try you shall not pass'})
      } else {
        req.user = {
          username: decodedToken.username,
        }
        next()
      }
    })
  } else {
    res.status(400).json({message: 'no token provided'})
  }
};
