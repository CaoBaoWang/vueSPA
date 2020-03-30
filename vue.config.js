module.exports = {
  // baseUrl:'./', 弃用
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/' ,
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/' ,


  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'font-size-sm': '13px',
          'font-size-md': '15px',
          'font-size-lg': '17px',
          'goods-action-button-danger-color': 'red',
          'goods-action-button-warning-color': 'blue',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          // hack: 'true; @import "C:\\Users\\Administrator\\WebstormProjects\\public\\src\\style\\theme.less";',
          hack: 'true; @import "'+__dirname+'\\src\\style\\theme.less";',



        }
      }
    }
  }
};



