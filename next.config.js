module.exports = {

  reactStrictMode: true,

  //supertokens
  //https://stackoverflow.com/questions/67478532/module-not-found-cant-resolve-fs-nextjs

  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
    // Looks like backward compatibility approach.
  },
  images: {
    domains: ['bucketmoon.s3.eu-west-3.amazonaws.com', 'bucketmoon.s3.amazonaws.com'],
  },
  webpack: (config, options) => {
    //https://dev.to/marcinwosinek/how-to-add-resolve-fallback-to-webpack-5-in-nextjs-10-i6j
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

}