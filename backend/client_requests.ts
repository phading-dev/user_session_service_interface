import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { CreateClientSessionRequestBody, CreateClientSessionResponse, CREATE_CLIENT_SESSION, ValidateAndRetrieveTrustedSessionRequestBody, ValidateAndRetrieveTrustedSessionResponse, VALIDATE_AND_RETRIEVE_TRUSTED_SESSION } from './interface';

export function createClientSession(
  client: WebServiceClientInterface,
  body: CreateClientSessionRequestBody,
): Promise<CreateClientSessionResponse> {
  return client.send({
    descriptor: CREATE_CLIENT_SESSION,
    body,
  });
}

export function validateAndRetrieveTrustedSession(
  client: WebServiceClientInterface,
  body: ValidateAndRetrieveTrustedSessionRequestBody,
): Promise<ValidateAndRetrieveTrustedSessionResponse> {
  return client.send({
    descriptor: VALIDATE_AND_RETRIEVE_TRUSTED_SESSION,
    body,
  });
}
