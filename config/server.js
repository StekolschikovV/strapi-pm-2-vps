module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '82c36fff8ad9de14131f210b2beabbfb'),
    },
  },
});
