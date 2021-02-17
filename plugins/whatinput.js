export default () => {
  if (process.client) {
    require('what-input')
  }
}
