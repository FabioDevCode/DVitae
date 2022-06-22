#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -add
git commit -m 'Deployment'
git push -f git@github.com:fabiodevcode/dynamicvitae.git main:gh-pages

cd -