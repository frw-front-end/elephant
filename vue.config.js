const path = require("path");


module.exports = {
    lintOnSave: undefined,

    devServer: {
        proxy: {
            "/wxapi": {
                // target:
                // "http://measurewxbk.c599e8ff428ba4440b0443d009a5a61b5.cn-shenzhen.alicontainer.com",
                // 测试
                target: "http://wxpubilcaddr.cloudream.net",
                // 生产
                // target: "http://wxpublic.cloudream.com",
                changeOrigin: true
            },
            "/orderservice": {
                // test
                target: "http://orderservice.cloudream.net",
                changeOrigin: true
            }
        }
    },


    baseUrl: undefined,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: false,
    parallel: undefined,
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
