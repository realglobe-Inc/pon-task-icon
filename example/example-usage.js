'use strict'

const pon = require('pon')
const ponTaskIcon = require('pon-task-icon')

async function tryExample () {
  let run = pon({
    'icon:generate': ponTaskIcon('assets/icons/favicon.png', {
      text: 'THE',
      color: '#381',
      shape: 'a',
      font: 'j'
    })
  })

  run('icon:generate')
}

tryExample()
