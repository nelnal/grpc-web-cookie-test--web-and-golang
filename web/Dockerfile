FROM    node:15.6-alpine3.10 as builder

WORKDIR /work

COPY  . .

RUN   : \
  &&  yarn install \
  &&  yarn build \
  &&  :

FROM    nginx:1.19-alpine as runner

COPY  --from=builder /work/html /usr/share/nginx/html

EXPOSE  80
