module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8080,
        // open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
               // target: 'http://127.0.0.1:8088/', //对应自己的接口
                target:'http://www.liulongbin.top:3005',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}
