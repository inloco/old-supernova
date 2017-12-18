# Supernova #
## Install
```sh
git clone git@bitbucket.org:ubeedev/supernova.git
cd supernova
npm install
```

## Learn more seeing the Docs
[See the docs!](http://supernova.ubee.in/)

## How to update this project
If you want to update the Supernova project, you have to follow this steps:

1. Clone the supernova doc
2. Do your changes
3. Test and update the Supernova-doc(Repository) with your changes in the supernova project

 - Go to the supernova project
 
 - npm install
 
 - npm run build
 
 - npm link
 
 - Go to the supernova-doc project
 
 - npm link supernova-inloco
 
 - Go to the supernova project
 
 - npm run build -- --watch

Now you have the supernova linked to the supernova-doc. If you change something in the supernova project you just have to refresh the page and your change will appear in the supernova-doc screen

4. Update the /Versions page with your changes
5. Create the Pull Request to the supernova and supernova-doc
6. Review your code if necessary
7. Merge the supernova pull request
8. Create the new tag in the supernova project

 - git checkout master
 
 - git pull origin master
 
 - git pull origin --tags
 
 - git tag -a v2.4.2 -m "The message you put in the /Versions page" (Here you will use the same version you used in the /Versions page)
 
 - git push origin --tags
 
9. Merge the supernova-doc pull request
10. Send a alert to #guild_product_alerts

