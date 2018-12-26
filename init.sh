#/bin/sh

cd /modesens/modesens-frontend/modesens
rm -rf .nuxt/*
aws s3 sync s3://modesens/nuxt .nuxt
pm2 restart all 

