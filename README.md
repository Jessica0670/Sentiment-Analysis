# Project Name

Twitter Data Analysis Application.

## Team

Jessica Thompson

## Roadmap

View the project roadmap [here](LINK_TO_DOC)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x

## Development

### Installing System Dependencies

brew install yarn
brew install redis
brew install postgresql

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

yarn global add grunt-cli knex eslint

## App Configuration

Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable.

For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

See https://www.npmjs.com/package/config
And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.
view: ps auxwww | grep postgres
- psql -U jessicathompson -l

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development envronment: `grunt pgcreatedb:default`
//create thesis_devel db with no tables//


Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`
//create thesis_test//
### Run Migrations & Data Seeds

In terminal, from the root directory:

To migrate to the latest version, run:
`knex migrate:latest --env NODE_ENV`
//add tables to db

To rollback a version, run:
`knex migrate:rollback --env NODE_ENV`

To populate the database with seed data, run:

REVOKE CONNECT ON DATABASE thesis_devel FROM public;

Clear DB:
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'thesis_devel';

`knex seed:run --env NODE_ENV`
//connect to seed file!
psql -U jessicathompson thesis_devel < 20170326215143_initial.js
Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`
