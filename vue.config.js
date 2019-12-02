const webpack = require('webpack');
module.exports={
    configureWebpack:{
        plugins: [
            new webpack.ProvidePlugin({
              $:"jquery",
              jQuery:"jquery",
              "windows.jQuery":"jquery"
            })
        ],
        //引入外部扩展属性
        externals: {
            prod: 'prod'
        }
        
    },
    devServer:{
        proxy:{
            '/suntorylink/module':{
                target:'http://10.100.1.161:10099/',
                ws: true,
                changeOrigin: true
            },
            '/suntorylink/favs':{
                target:'http://10.100.1.161/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}