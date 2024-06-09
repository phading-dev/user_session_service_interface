import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RenewClientSessionRequestBody, RenewClientSessionResponse, RENEW_CLIENT_SESSION } from './interface';

export function renewClientSession(
  client: WebServiceClientInterface,
  body: RenewClientSessionRequestBody,
): Promise<RenewClientSessionResponse> {
  return client.send({
    descriptor: RENEW_CLIENT_SESSION,
    body,
  });
}
