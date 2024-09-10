import { CheckCapabilityRequestBody, CheckCapabilityResponse, CHECK_CAPABILITY, RenewClientSessionRequestBody, RenewClientSessionResponse, RENEW_CLIENT_SESSION } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function checkCapability(
  client: WebClientInterface,
  body: CheckCapabilityRequestBody,
  options?: WebClientOptions,
): Promise<CheckCapabilityResponse> {
  return client.send(
    {
      descriptor: CHECK_CAPABILITY,
      body,
    },
    options,
  );
}

export function renewClientSession(
  client: WebClientInterface,
  body: RenewClientSessionRequestBody,
  options?: WebClientOptions,
): Promise<RenewClientSessionResponse> {
  return client.send(
    {
      descriptor: RENEW_CLIENT_SESSION,
      body,
    },
    options,
  );
}
