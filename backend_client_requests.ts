import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { StartNewSessionRequestBody, StartNewSessionResponse, START_NEW_SESSION } from './backend_interface';

export function startNewSession(
  client: WebServiceClientInterface,
  body: StartNewSessionRequestBody,
): Promise<StartNewSessionResponse> {
  return client.send({
    descriptor: START_NEW_SESSION,
    body,
  });
}
