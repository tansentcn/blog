module.exports = {
    devServer: {
        proxy: {
            '/blog': {
                target: 'https://api.tansent.top/', //API服务器的地址
                ws: true,
                changeOrigin: true
            }
        }
    }
}