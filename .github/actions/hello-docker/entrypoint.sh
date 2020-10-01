#!/bin/sh -l
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