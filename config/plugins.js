console.log("CLOUDINARY CONFIG:", {
  name: process.env.CLOUDINARY_NAME,
  key: process.env.CLOUDINARY_KEY,
  secret: process.env.CLOUDINARY_SECRET ? 'OK' : 'Missing',
});

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi/provider-upload-cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
