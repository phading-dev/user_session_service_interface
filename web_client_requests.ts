import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { RenewWebClientSessionRequestBody, RenewWebClientSessionResponse, RENEW_WEB_CLIENT_SESSION } from './web_interface';

export function renewWebClientSession(
  client: WebServiceClientInterface,
  body: RenewWebClientSessionRequestBody,
): Promise<RenewWebClientSessionResponse> {
  return client.send({
    descriptor: RENEW_WEB_CLIENT_SESSION,
    body,
  });
}
