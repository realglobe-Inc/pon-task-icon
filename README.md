pon-task-icon
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/pon-task-icon
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/pon-task-icon
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/pon-task-icon.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/pon-task-icon
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/pon-task-icon.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/pon-task-icon/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/pon-task-icon
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/pon-task-icon.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/pon-task-icon.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/pon-task-icon
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/pon-task-icon.svg
[bd_npm_url]: http://www.npmjs.org/package/pon-task-icon
[bd_npm_shield_url]: http://img.shields.io/npm/v/pon-task-icon.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Pon task to generate icon

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install pon-task-icon --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Signature.md.hbs" Start -->

<a name="section-doc-guides-03-signature-md"></a>

Signatures
---------


### `define(filename, options) -> function`

Define task to generate icon

| Param | type | Description |
| ---- | --- | ----------- |
| filename | string |  File name to generate |
| options | Object |  Optional settings |
| options.size | number |  Size of favicon |
| options.shape | string |  Theme of shape |
| options.color | string |  Favicon color |
| options.font | string |  Theme of font |
| options.text | string |  Text of favicon |
| options.fontSize | string |  Size of font |



<!-- Section from "doc/guides/03.Signature.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/pon-task-icon/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [Pon][pon_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[pon_url]: https://github.com/realglobe-Inc/pon
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
