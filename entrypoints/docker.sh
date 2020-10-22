#!/bin/sh

set -e

if [ -f tmp/pids/server.pid ]; then
    rm tmp/pids/server.pid
fi

DIR=$(pwd)
FILE="$DIR"/config/development_env.rb
if [ ! -f "$FILE" ]; then
    echo "# This file contains the ENV vars necessary to run the app locally." >> $FILE
    echo "# Some of these values are sensitive, and some are developer specific." >> $FILE
    echo "#" >> $FILE
    echo "# DO NOT CHECK THIS FILE INTO VERSION CONTROL!" >> $FILE
fi


bin/rails db:create db:migrate
# Uncomment to run if needed. Seeding multiple times causes errors.
# bin/rails db:seed

bundle exec rails server --port 3000 --binding 0.0.0.0
