// Update with your config settings.

module.exports = {
  development: {
    // client: 'sqlite3',
    // connection: {
    //   filename: './dev.sqlite3'
    // },
    client: "pg",
    connection: "postgres://postgres:1701445@localhost:5432/cursos",
    migrations: {
      directory: "./src/config/database/migrations"
    },
    seeds: { directory: "./src/config/database/seeds" },
    useNullAsDefault: true
  },

  test: {
    // client: 'sqlite3',
    // connection: {
    //   filename: './dev.sqlite3'
    // },
    client: "pg",
    connection: "postgres://postgres:1701445@localhost:5432/test",
    migrations: {
      directory: "./src/config/database/migrations"
    },
    seeds: { directory: "./src/config/database/seeds" },
    useNullAsDefault: true
  }
};
