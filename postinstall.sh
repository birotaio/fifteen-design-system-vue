#!/usr/bin sh

if [ -d .git ]
then
  # in the git context, we need to build the forked dependencies
  current_dir=$(pwd)
  cd ./node_modules/vue3-popper
  npm install --silent
  npm run build:es
  rm -rf node_modules
  cd $current_dir
fi
