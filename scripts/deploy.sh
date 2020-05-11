#!/bin/bash
set -e

log_and_exit () {
  echo $1
  exit 1
}

echo "Assuming pipeline role"

output=$(aws --output text sts assume-role --role-arn arn:aws:iam::${AWS_ACCOUNT_ID}:role/${AWS_ACCOUNT_ROLE} --role-session-name react-frontend-deploy | grep CREDENTIALS)

export AWS_ACCESS_KEY_ID=$( echo $output | cut -d' ' -f2)
export AWS_SECRET_ACCESS_KEY=$( echo $output | cut -d' ' -f4)
export AWS_SESSION_TOKEN=$( echo $output | cut -d' ' -f5)

echo "Entering ./dist folder..."
cd dist

echo "Uploading all files in all dirs except top-level dir"
# These files all need gzip header and cache control of 1 year
for file in $(find . -mindepth 2 -type f | cut -c 3-) ; do
  if  echo "$file" | grep -q '\.gz$'
  then
    aws s3 cp $file s3://commerce-admin-tool-${DEPLOY_TO}/${file%.gz} --cache-control "public, max-age=31536000" --content-encoding "gzip" --acl public-read || log_and_exit "Failed to copy ${file}"
  else
    aws s3 cp $file s3://commerce-admin-tool-${DEPLOY_TO}/$file --cache-control "public, max-age=31536000" --acl public-read || log_and_exit "Failed to copy ${file}"
  fi
done

echo "Uploading all files in the root DIR that are NOT index.html"
# These files need a cache control of 30 days on CDN, 1 day on end-user and gzip encoding
for file in $(find . -maxdepth 1 -type f | grep -v -E '(^./index.html$)' | cut -c 3-) ; do
  if  echo "$file" | grep -q '\.gz$'
  then
    aws s3 cp $file s3://commerce-admin-tool-${DEPLOY_TO}/${file%.gz} --cache-control "public, max-age=86400, s-max-age=2592000" --content-encoding "gzip" --acl public-read || log_and_exit "Failed to copy ${file}"
  else
    aws s3 cp $file s3://commerce-admin-tool-${DEPLOY_TO}/$file --cache-control "public, max-age=86400, s-max-age=2592000" --acl public-read || log_and_exit "Failed to copy ${file}"
  fi
done

echo "Uploading index.html"
aws s3 cp index.html.gz s3://commerce-admin-tool-${DEPLOY_TO}/index.html --cache-control "public, max-age=0, s-maxage=300" --content-encoding "gzip" --acl public-read || log_and_exit "Failed to copy ${file}"
