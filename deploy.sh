# /bin/bash

# 确保脚本抛出遇到的错误
set -e


yarn build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'
# 部署到 https://.github.io/
git push -f git@github.com:teacherzjl/teacherzjl.github.io.git main:main

# 提交所有代码到github
cd ../../../
git add .
git cm -m 'update'
git push
