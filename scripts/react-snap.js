#! /usr/bin/env node

const reactSnap = require('react-snap')

const run = async () => {
  try {
    await reactSnap.run({
      ...reactSnap.defaultOptions,
      puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
  } catch (e) {
    console.error(e)
  }
}

run()
