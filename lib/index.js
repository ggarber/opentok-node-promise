var OpenTok = require('opentok');
var RSVP = require('rsvp');

function OpenTokPromise(key, secret, url) {
  this.ot = new OpenTok(key, secret, url);
}

OpenTokPromise.prototype.createSession = function(opts) {
  var ot = this.ot;

  return new RSVP.Promise(function(resolve, reject) {
    ot.createSession(opts, function(err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

OpenTokPromise.prototype.generateToken = function(sessionId, opts) {
  return this.ot.generateToken(sessionId, opts);
}

module.exports = OpenTokPromise;