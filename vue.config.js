module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '../../' : '/',
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        port: 8066,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://192.168.1.101/',
                /* 允许跨域 */
                changeOrigin: true,
            },
        },
    },
}