
exports.up = function (knex, Promise) {
  return Promise.all([
    // knex.schema.createTableIfNotExists('profile', function (table) {
    //   table.increments('id').unsigned().primary(); //how to add unique id
    //   table.string('user_id', 50).nullable().unique(); //added for unique twitter id
    //   table.string('first', 100).nullable();
    //   table.string('last', 100).nullable();
    //   table.string('display', 100).nullable();
    //   table.string('email', 100).nullable().unique(); //cannot get without permission
    //   table.string('phone', 100).nullable(); //cannot get without permission
    //   table.timestamps(true, true); //what is timestamp
    // }),
    knex.schema.createTableIfNotExists('company', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name', 250).nullable();
    }),
    knex.schema.createTableIfNotExists('tweet', function (table) {
      table.increments('id').unsigned().primary(); //how to add unique id
      table.text('message', 'longtext').nullable();
      table.string('username').nullable();
      table.dateTime('time').nullable();
      table.string('score', 250).nullable(); //number or string??
      // table.uuid( 'userId').references( 'id' ).inTable( 'company' );
      table.integer('companyId',11).unsigned().references('id').inTable('company');
      // table.string('user_id', 250).references('id').inTable('company'); //connect user id
    }),
    knex.schema.createTableIfNotExists('scores', function (table) {
      table.increments('id').unsigned().primary();
      table.string('time', 10).nullable();
      table.string('total', 10).nullable();
      table.integer('companyId',11).unsigned().references('id').inTable('company');
    })
    // ,
  //   knex.schema.createTableIfNotExists('auths', function(table) {
  //     table.increments('id').unsigned().primary();
  //     table.string('type', 8).notNullable();
  //     table.string('oauth_id', 30).nullable();
  //     table.string('password', 100).nullable();
  //     table.string('salt', 100).nullable();
  //     table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
  //   })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    // knex.schema.dropTable('auths'),
    // knex.schema.dropTable('profiles')
    // knex.schema.dropTable('company'),
    // knex.schema.dropTable('tweet')
  ]);
};
