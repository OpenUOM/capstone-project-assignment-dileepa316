module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/school.db', // Path to your SQLite database
      },
      useNullAsDefault: true, // SQLite requires this setting
      migrations: {
        directory: './migrations', // Path to your migrations folder
      },
      seeds: {
        directory: './seeds', // Path to your seeds folder
      },
    },
    test: {
      client: 'sqlite3',
      connection: {
        filename: ':memory:', // Use an in-memory SQLite database for testing
      },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
    production: {
      client: 'sqlite3',
      connection: {
        filename: './data/school.db',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  };
  