package main

import (
	"context"

	greeting_v1 "github.com/nelnal/grpc-web-cookie-test--web-and-golang/server/greeting/v1"
)

type handler struct {
	greeting_v1.UnimplementedGreetingServiceServer
}

func NewHandler() greeting_v1.GreetingServiceServer {
	return &handler{}
}

func (h handler) Greet(ctx context.Context, req *greeting_v1.GreetRequest) (*greeting_v1.GreetResponse, error) {
	return &greeting_v1.GreetResponse{Message: "hello"}, nil
}
