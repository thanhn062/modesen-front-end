#/bin/sh

cd /modesens/modesens-frontend/
git fetch origin tmp
git checkout tmp
cd /modesens/modesens-frontend/modesens
rm -rf .nuxt/*
npm install
aws s3 sync s3://modesens/nuxt .nuxt
export PM2_HOME='/root/.pm2'
pm2 startOrReload server.json

