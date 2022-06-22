#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -add
git commit -m 'Deployment'
git subtree push --prefix dist origin gh-pages

cd -