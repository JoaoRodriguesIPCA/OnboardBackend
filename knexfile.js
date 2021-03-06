module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'admin',
      password: 'admin',
      database: 'onboard',
    },
    debug: false,
    migrations: {
      directory: 'src/migrations',
    },
    seeds: {
      directory: 'src/seeds',
    },
    pool: {
      min: 0,
      max: 50,
      propagateCreateError: false,
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: 'src/migrations',
    },
    seeds: {
      directory: 'src/seeds',
    },
  },
};
