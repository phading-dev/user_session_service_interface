import { CheckCapabilityRequestBody, CheckCapabilityResponse, CHECK_CAPABILITY, RenewSessionRequestBody, RenewSessionResponse, RENEW_SESSION } from './interface';
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

export function renewSession(
  client: WebClientInterface,
  body: RenewSessionRequestBody,
  options?: WebClientOptions,
): Promise<RenewSessionResponse> {
  return client.send(
    {
      descriptor: RENEW_SESSION,
      body,
    },
    options,
  );
}
