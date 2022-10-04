rm -rf dist &&
pnpm run build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git branch -M master &&
git remote add origin git@github.com:heycn/keeping-book-website.git &&
git push -f origin master &&
cd - &&
echo https://heycn.github.io/keeping-book-website/
