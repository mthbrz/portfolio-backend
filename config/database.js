module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-xxxx.eu-central-1.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'neondb'),
      user: env('DATABASE_USERNAME', 'mathi'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: {
        rejectUnauthorized: false, 
      },
    },
  },
});
