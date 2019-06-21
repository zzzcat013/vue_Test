const appData=require('./data.json')
const seller=appData.seller
const goods=appData.goods


module.exports = {
    devServer: {
		port: 8085, // 端口号
		host: "localhost",
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器
		// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
		proxy: {
			"/api": {
				target: "<url>",
				ws: true,
				changeOrigin: true
			},
			"/foo": {
				target: "<other_url>"
			}
		} // 配置多个代理
	},

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    },
    devServer:{
        before(app){
            app.get('/api/seller',function (req,res) {
                res.json({
                    errno:0,
                    data: seller
                })
            })
            app.get('/api/goods',function (req,res) {
                res.json({
                    errno:0,
                    data: goods
                })
            })
        }
    }


};
