module.exports = {
    devServer: {
        proxy: {
            '/blog': {
                target: 'https://www.tansent.top/', //API服务器的地址
                ws: true,
                changeOrigin: true
            }
        }
    }
}