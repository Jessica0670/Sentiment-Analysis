const db = require('../');

const Company = db.Model.extend({
  tableName: 'company',

  tweet: function() {
    return this.hasMany('Tweet');
  }
});

const Tweet = db.Model.extend({
  tableName: 'tweet',
  company: function() {
    return this.belongsTo(Company);
  }
});

module.exports = db.model('Company', Company);
module.exports = db.model('Tweet', Tweet);
