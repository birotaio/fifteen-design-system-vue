#!/usr/bin sh

# when not in a git context (that is to say, in a npm package context),
# we move the dist resolvers and rules directories so that they can be accessed
if [ ! -d .git ]
then
  rm -rf resolvers
  mv dist/types/resolvers resolvers
  rm -rf rules
  mv dist/types/rules rules
fi

# we also install the forked dependencies
current_dir=$(pwd)
cd ./node_modules/vue3-popper
npm install --silent
npm run build:es
rm -rf node_modules
cd $current_dir
