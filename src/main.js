language: node_js
node_js:
  - '8'
matrix:
  include:
  - os: linux
    dist: xenial
    sudo: required
  - os: osx
cache:
  yarn: true
notifications:
  email: false
script:
  - yarn dist
deploy:
  provider: releases
  api_key: $ENCRYPTED_GITHUB_TOKEN
  skip_cleanup: true
  on:
    tags: true