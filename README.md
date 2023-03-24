## @magic-examples/minimal

This is a minimal example app for [@magic](https://github.com/magic) features.

visit the [@magic-examples](https://github.com/magic-examples)
github organization to see other examples

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/example-minimal.svg
[npm-url]: https://www.npmjs.com/package/@magic/example-minimal
[travis-image]: https://api.travis-ci.org/magic/example-minimal.svg?branch=master
[travis-url]: https://travis-ci.org/magic/example-minimal
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/example-minimal/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/example-minimal/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/example-minimal/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/example-minimal
[greenkeeper-image]: https://badges.greenkeeper.io/magic/example-minimal.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/example-minimal.svg
[snyk-image]: https://snyk.io/test/github/magic/example-minimal/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/example-minimal

### file sizes

at the time of writing this line, this page loads:

- 12000 bytes of javascript (5500 bytes compressed)
- 2900 bytes of css (1760 bytes compressed)
- 1000 bytes index.html (1.25kb bytes compressed)

#### load stats

ms are approximations:

system: firefox, linux, lenovo x280, wifi
location: vienna, austria, europe

- 4 requests (index.html, magic.js, magic.css, favicon.ico)
- 17 KB / 10 KB transferred

[100% google pagespeed score](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fmagic-examples.github.io%2Fminimal)

[w3 css validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmagic-examples.github.io%2Fminimal%2Fmagic.css)

[w3 html validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmagic-examples.github.io%2Fminimal%2F)

[demo](https://magic-examples.github.io/minimal)

### installation

#### requirements

- be in a directory you want to work in
- have nodejs > 14.2.0 installed.

```
// clone this repository
git clone https://github.com/magic-examples/minimal ./your-project-name

// go to the new project directoy
cd ./your-project-name

// install @magic dependencies
npm install

// run dev server
npm run dev

// goto http://localhost:2323  in your browser to see the page

// build changes you made to docs dir
npm run build

// reset the remotes to your repository
git remote rename origin upstream
git remote add origin git@provider.com/{your name}/{your repo}

// publish changes, after committing them to the local git
git push

```
