# Deploy
git add .
echo "Nom du commit :"
read commit
git commit -m "$commit"
git push origin master