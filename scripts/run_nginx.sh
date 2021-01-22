#!/usr/bin/env ash

envsubst < /etc/nginx/conf.d/proxy.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'
