package main

import (
	"net"
	"os"

	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_logrus "github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus"
	greeting_v1 "github.com/nelnal/grpc-web-example/server/greeting/v1"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

func main() {
	logrus.SetOutput(os.Stdout)
	logrus.SetFormatter(&logrus.JSONFormatter{})
	logger := logrus.WithFields(logrus.Fields{})

	server := grpc.NewServer(
		grpc_middleware.WithUnaryServerChain(
			grpc_logrus.UnaryServerInterceptor(logger),
		),
		grpc_middleware.WithStreamServerChain(
			grpc_logrus.StreamServerInterceptor(logger),
		),
	)

	greeting_v1.RegisterGreetingServiceServer(server, NewHandler())

	lis, err := net.Listen("tcp", "localhost:50051")
	if err != nil {
		logger.Fatal("failed to listen")
	}
	logger.Info("start listen")

	if err := server.Serve(lis); err != nil {
		logrus.WithError(err).Error("stop server")
	}
}
