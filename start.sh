#!/bin/sh

if [ ! -f .env ]; then
  touch .env
  echo "Enter your api key, followed by [ENTER]:"
  read APIKEY
  echo "REACT_APP_NEWS_API_KEY=${APIKEY}" > .env
fi

npm run start:scripts
