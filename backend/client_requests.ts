import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { CreateClientSessionRequestBody, CreateClientSessionResponse, CREATE_CLIENT_SESSION, ExchangeSessionAndCheckCapabilityRequestBody, ExchangeSessionAndCheckCapabilityResponse, EXCHANGE_SESSION_AND_CHECK_CAPABILITY } from './interface';

export function createClientSession(
  client: WebServiceClientInterface,
  body: CreateClientSessionRequestBody,
): Promise<CreateClientSessionResponse> {
  return client.send({
    descriptor: CREATE_CLIENT_SESSION,
    body,
  });
}

export function exchangeSessionAndCheckCapability(
  client: WebServiceClientInterface,
  body: ExchangeSessionAndCheckCapabilityRequestBody,
): Promise<ExchangeSessionAndCheckCapabilityResponse> {
  return client.send({
    descriptor: EXCHANGE_SESSION_AND_CHECK_CAPABILITY,
    body,
  });
}
