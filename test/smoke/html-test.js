const glob = require('glob-all')

describe('test dist generated html files', () => {
  it('should generated html', (done) => {
    const files = glob.sync(['./dist/index.html', './dist/search.html'])
    if (files.length > 0) {
      done()
    } else {
      throw new Error('no html files generated')
    }
  })
})
