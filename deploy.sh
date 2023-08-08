# /bin/bash

# 确保脚本抛出遇到的错误
set -e


yarn build
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'
git push -f git@github.com:teacherzjl/teacherzjl.github.io.git master:main

cd ../../../
git add .
git commit -m 'update'
git push
