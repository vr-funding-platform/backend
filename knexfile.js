require('dotenv').config();
const localPg = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
};

const pg = require('pg');

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
		client: 'pg',
		connection: dbConnection,
		migrations: {
			directory: './migrations'
		},
		seeds: {
			directory: './seeds'
		}
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'pg',
		connection: dbConnection,
		migrations: {
			directory: './migrations'
		},
		seeds: {
			directory: './seeds'
		}
	},

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    }
  }
};