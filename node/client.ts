import { CreateSessionRequestBody, CreateSessionResponse, CREATE_SESSION, ExchangeSessionAndCheckCapabilityRequestBody, ExchangeSessionAndCheckCapabilityResponse, EXCHANGE_SESSION_AND_CHECK_CAPABILITY } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function createSession(
  client: NodeClientInterface,
  body: CreateSessionRequestBody,
  options?: NodeClientOptions,
): Promise<CreateSessionResponse> {
  return client.send(
    {
      descriptor: CREATE_SESSION,
      body,
    },
    options,
  );
}

export function exchangeSessionAndCheckCapability(
  client: NodeClientInterface,
  body: ExchangeSessionAndCheckCapabilityRequestBody,
  options?: NodeClientOptions,
): Promise<ExchangeSessionAndCheckCapabilityResponse> {
  return client.send(
    {
      descriptor: EXCHANGE_SESSION_AND_CHECK_CAPABILITY,
      body,
    },
    options,
  );
}