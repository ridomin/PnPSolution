module.exports = {
  devServer: {
    proxy: 'http://localhost:3001',
    port: 3000,
    disableHostCheck: true
  },
  outputDir: 'build'
}
