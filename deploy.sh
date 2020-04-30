git pull
yarn build
cp ./404.html ./docs/404.html

git add -A
git commit -am 'deploy'
git push
