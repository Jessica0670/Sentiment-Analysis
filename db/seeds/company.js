
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, name: 'Facebook'},
        {id: 2, name: 'Microsoft'},
        {id: 3, name: 'Android'},
        {id: 4, name: 'Samsung'}
      ]);
    });
};
