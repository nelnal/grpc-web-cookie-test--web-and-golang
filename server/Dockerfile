FROM  golang:1.15-alpine as builder

WORKDIR /go/src/github.com/nelnal/grpc-web-example/server

ENV   GOPATH=/go \
      CGO_ENABLED=0 \
      PATH=$GOPATH/bin:$PATH

RUN   : \
  &&  apk update \
  &&  apk add --no-cache git=2.26.2-r0 make=4.3-r0 \
  &&  :

COPY  . .

RUN   : \
  &&  go mod download \
  &&  go build \
  &&  :

FROM  alpine:3.12 as runner

WORKDIR /app

COPY  --from=builder /go/src/github.com/nelnal/grpc-web-example/server/server ./

RUN   : \
  &&  addgroup -g 9000 -S server \
  &&  adduser -u 9000 -S server -G server \
  &&  chown -R server /app \
  &&  :

USER  server

CMD   ["/app/server"]
