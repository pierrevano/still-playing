# Update Node packages
rm -rf node_modules
rm -f package-lock.json
npm i

# Beautify JS files
js-beautify -r --type js resources/*.js
js-beautify -r --type js *.js
js-beautify -r --type js *.json

# Deploy to Heroku
git add .
echo "Nom du commit :"
read commit
git commit -m "$commit"
git push heroku master