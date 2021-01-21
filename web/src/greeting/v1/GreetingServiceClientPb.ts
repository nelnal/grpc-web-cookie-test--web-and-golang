/**
 * @fileoverview gRPC-Web generated client stub for greeting.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as greeting_v1_greeting_pb from '../../greeting/v1/greeting_pb';


export class GreetingServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGreet = new grpcWeb.AbstractClientBase.MethodInfo(
    greeting_v1_greeting_pb.GreetResponse,
    (request: greeting_v1_greeting_pb.GreetRequest) => {
      return request.serializeBinary();
    },
    greeting_v1_greeting_pb.GreetResponse.deserializeBinary
  );

  greet(
    request: greeting_v1_greeting_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null): Promise<greeting_v1_greeting_pb.GreetResponse>;

  greet(
    request: greeting_v1_greeting_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: greeting_v1_greeting_pb.GreetResponse) => void): grpcWeb.ClientReadableStream<greeting_v1_greeting_pb.GreetResponse>;

  greet(
    request: greeting_v1_greeting_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: greeting_v1_greeting_pb.GreetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greeting.v1.GreetingService/Greet',
        request,
        metadata || {},
        this.methodInfoGreet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greeting.v1.GreetingService/Greet',
    request,
    metadata || {},
    this.methodInfoGreet);
  }

}

