/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const { ok } = require('assert')

describe('define', function () {
  this.timeout(30000)

  it('Define', async () => {
    let ctx = ponContext()
    let task = define(
      `${__dirname}/foo/bar.png`,
      {
        text: 'THE',
        shape: 'a',
        font: 'j'
      }
    )
    ok(task)

    await Promise.resolve(task(ctx))
  })
})

/* global describe, before, after, it */
