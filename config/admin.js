module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff3ce084edd3a7423dafc37e370ef8de'),
  },
});
