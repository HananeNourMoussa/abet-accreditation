#!/usr/bin/env bash

pguser=$(grep '^PGUSER' .env | cut -d '=' -f2)
pgpass=$(grep '^PGPASSWORD' .env | cut -d '=' -f2)
export PGPASSWORD=$pgpass
pgbase=$(grep '^PGDATABASE' .env | cut -d '=' -f2)

rm -rf ./db/createdb.sql
touch ./db/createdb.sql
echo "DROP DATABASE IF EXISTS $pgbase;
DROP ROLE IF EXISTS $pguser;
CREATE ROLE $pguser WITH LOGIN PASSWORD '$pgpass';
CREATE DATABASE $pgbase OWNER $pguser;" > ./db/createdb.sql

psql -U postgres < ./db/createdb.sql

psql $pgbase $pguser < ./db/seed.sql
