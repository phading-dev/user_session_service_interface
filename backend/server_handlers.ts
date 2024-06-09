import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { CREATE_CLIENT_SESSION, CreateClientSessionRequestBody, CreateClientSessionResponse, VALIDATE_AND_RETRIEVE_TRUSTED_SESSION, ValidateAndRetrieveTrustedSessionRequestBody, ValidateAndRetrieveTrustedSessionResponse } from './interface';

export abstract class CreateClientSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_CLIENT_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: CreateClientSessionRequestBody,
  ): Promise<CreateClientSessionResponse>;
}

export abstract class ValidateAndRetrieveTrustedSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = VALIDATE_AND_RETRIEVE_TRUSTED_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: ValidateAndRetrieveTrustedSessionRequestBody,
  ): Promise<ValidateAndRetrieveTrustedSessionResponse>;
}
