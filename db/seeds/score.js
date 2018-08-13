const models = require('../models');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {id: 1, time:'', total:'0', companyId: 1},
        {id: 2, time:'', total:'0', companyId: 1},
      ]);
    });
};
