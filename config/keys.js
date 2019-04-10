if(process.env.NOVE_ENV === 'production') {
  //production
  module.exports = require('./prod.js');
} else {
  //development
  module.exports = reauire('./dev.js');
}
