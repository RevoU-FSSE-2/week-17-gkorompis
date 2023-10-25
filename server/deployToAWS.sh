#!/bin/sh

echo ">>> transpiling..."

cd ~/snow-revou/week-16-gkorompis
pwd

chmod 700 ./compile.sh
./compile.sh
pwd

echo ">>> compress deploy file"
zip -r deploy.zip . -x "src/*" "misc/*" "test*" "*.sh" "./testenv.js" "cek/*" "lambda.js" ".git/*"

echo ">>> upload to aws s3 bucket"
aws s3 cp deploy.zip s3://revou-week17-02

echo ">>> deploy to aws lambda"
aws lambda update-function-code --function-name revou-week17-02 --s3-bucket revou-week17-02 --s3-key deploy.zip

