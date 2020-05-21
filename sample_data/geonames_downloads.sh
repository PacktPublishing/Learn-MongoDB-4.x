#!/bin/bash
export STATS_URL="https://download.geonames.org/export/dump/allCountries.zip"
export ZIP_URL="https://download.geonames.org/export/zip/allCountries.zip"
wget -O /tmp/stats.zip $STATS_URL
wget -O /tmp/postcodes.zip $ZIP_URL
unzip /tmp/stats.zip -d /tmp
mv /tmp/allCountries.txt /tmp/allCountriesStats.txt
unzip /tmp/postcodes.zip -d /tmp
mv /tmp/allCountries.txt /tmp/allCountriesPostcodes.txt
rm /tmp/*.zip
ls -l /tmp/all*


