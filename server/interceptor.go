package main

import (
	"context"

	"github.com/grpc-ecosystem/go-grpc-middleware/logging/logrus/ctxlogrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

func MetadataUnaryServerInterceptor() grpc.UnaryServerInterceptor {
	return func(
		ctx context.Context,
		req interface{},
		info *grpc.UnaryServerInfo,
		handler grpc.UnaryHandler,
	) (interface{}, error) {
		logger := ctxlogrus.Extract(ctx)
		md, ok := metadata.FromIncomingContext(ctx)
		if !ok {
			err := status.Error(
				codes.Internal,
				"failed to metadata",
			)
			return nil, err
		}
		logger.Infof("%v", md)
		return handler(ctx, req)
	}
}
