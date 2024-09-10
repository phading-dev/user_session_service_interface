import { CreateClientSessionRequestBody, CreateClientSessionResponse, CREATE_CLIENT_SESSION, ExchangeSessionAndCheckCapabilityRequestBody, ExchangeSessionAndCheckCapabilityResponse, EXCHANGE_SESSION_AND_CHECK_CAPABILITY } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function createClientSession(
  client: NodeClientInterface,
  body: CreateClientSessionRequestBody,
  options?: NodeClientOptions,
): Promise<CreateClientSessionResponse> {
  return client.send(
    {
      descriptor: CREATE_CLIENT_SESSION,
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
