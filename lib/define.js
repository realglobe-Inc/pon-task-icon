/**
 * Define task to generate icon
 * @function define
 * @param {string} filename - File name to generate
 * @param {Object} [options={}] - Optional settings
 * @param {number} [options.size=256] - Size of favicon
 * @param {string} [options.shape='e'] - Theme of shape
 * @param {string} [options.color='#E83'] - Favicon color
 * @param {string} [options.font='k'] - Theme of font
 * @param {string} [options.text='PON'] - Text of favicon
 * @param {string} [options.fontSize=null] - Size of font
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const amkdirp = require('amkdirp')
const fur = require('fur')

/** @lends define */
function define (filename, options = {}) {
  let {
    size = 256,
    shape = 'e',
    color = '#E83',
    font = 'k',
    text = 'PON',
    fontSize = null
  } = options

  async function task (ctx) {
    await amkdirp(path.dirname(filename))
    await fur.favicon(filename, {
      size,
      shape,
      color,
      font,
      text,
      fontSize,
      verbose: true
    })
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define


