# Update Node packages
rm -rf node_modules
rm -f package-lock.json
npm i

# Beautify JS files
js-beautify -r --type js resources/*.js
js-beautify -r --type js *.js
js-beautify -r --type js *.json

# Validate HTML structure
isValid=$(valimate | grep "Congratulations! Your HTML is valid!")

# If HTML is valid deploy to Heroku and GitHub
if [[ ! -z $isValid ]]; then
    git add .
    echo "Nom du commit :"
    read commit
    git commit -m "$commit"
    git push heroku master
else
    echo "HTML file is not valid."
fi