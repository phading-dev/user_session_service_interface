import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RenewClientSessionRequestBody, RenewClientSessionResponse, RENEW_CLIENT_SESSION, CheckCapabilityRequestBody, CheckCapabilityResponse, CHECK_CAPABILITY } from './interface';

export function renewClientSession(
  client: WebServiceClientInterface,
  body: RenewClientSessionRequestBody,
): Promise<RenewClientSessionResponse> {
  return client.send({
    descriptor: RENEW_CLIENT_SESSION,
    body,
  });
}

export function checkCapability(
  client: WebServiceClientInterface,
  body: CheckCapabilityRequestBody,
): Promise<CheckCapabilityResponse> {
  return client.send({
    descriptor: CHECK_CAPABILITY,
    body,
  });
}
