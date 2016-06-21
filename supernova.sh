#!/bin/bash

function update_version {
  npm run build
  npm version patch  
  
  $version = node -e "console.log(require('./package.json').version);"
  
  git add .  
  git commit -m "feat(new-version) update to version: $version"
  git push origin master
  git tag $version
  git push origin $version
  
  echo "New version generated -> $version"
}