#!/bin/sh -l

# Implement Error
if [ true ]
then
  echo 'error'
  exit 1
fi
# Error End

echo "::debug ::DEBUG Message"
echo "::warning ::WARNING Message"
echo "::error ::ERROR Message"

echo "::add-mask::$1"
echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"

echo "::group:: Some group"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

echo '::set.env name=HELLO:hello'