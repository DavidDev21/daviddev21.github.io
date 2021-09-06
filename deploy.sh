#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist/portfolio-v3

cat ../../README.md > README.md

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io ( need to fix linux subsystem's ssh problem with git)
# TLDR: in the future, when you have SSH key for windows, you need to copy it for the linux subsystem as well
# Its looking for those same keys in the linux system not the windows system.
git push -f git@github.com:DavidDev21/daviddev21.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -