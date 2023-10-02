// const getRoutes = require('./routes');

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    eslint: {ignoreDuringBuilds: true,
    }
    // exportPathMap: getRoutes,
    // useFileSystemPublicRoutes: true,
    // routes: [
    //     getRoutes
    // ],
    // publicRuntimeConfig: {
    //     localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
    //         ? process.env.LOCALE_SUBPATHS
    //         : 'none',
    // },
}

module.exports = nextConfig
