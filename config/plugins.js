module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dkhitxegv"),
        api_key: env("967123589829898"),
        api_secret: env("5lC7EjdEqN4ZVQsYw_P4rAHkDyg"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
