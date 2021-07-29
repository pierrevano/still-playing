# Define commit name
commit=$1

# Move git repo to one level up
mv ../ya-encore-un-francais-github/.git ../

# Remove ya-encore-un-francais-github folder
rm -f -R ../ya-encore-un-francais-github

# Create new ya-encore-un-francais-github folder
mkdir ../ya-encore-un-francais-github

# Move git repo to ya-encore-un-francais-github folder
mv ../.git ../ya-encore-un-francais-github

# Copy files from ya-encore-un-francais to ya-encore-un-francais-github except git repo
rsync -av --progress . ../ya-encore-un-francais-github --exclude .git/

# Remove extra files for github
rm -f ../ya-encore-un-francais-github/.jshintrc
rm -f ../ya-encore-un-francais-github/deploy.sh
rm -f ../ya-encore-un-francais-github/package-lock.json
rm -rf ../ya-encore-un-francais-github/node_modules

# Change current path to ya-encore-un-francais-github
cd ../ya-encore-un-francais-github

# Deploy to GitHub
git add . && git commit -m "$commit" && git push origin master
