#/bin/sh

/bin/cp -rf /modesens/modesens-frontend/nginx/modesens_us.conf /etc/nginx/conf.d/modesens.conf
cd /modesens/modesens-frontend/modesens
rm -rf .nuxt/*
npm install
aws s3 sync s3://modesens/nuxt .nuxt
export PM2_HOME='/root/.pm2'
pm2 startOrReload server.json

