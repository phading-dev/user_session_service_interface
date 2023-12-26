import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { START_NEW_SESSION, StartNewSessionRequestBody, StartNewSessionResponse, VALIDATE_SESSION, ValidateSessionRequestBody, ValidateSessionResponse } from './interface';

export abstract class StartNewSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = START_NEW_SESSION;
  public abstract handle(
    requestId: string,
    body: StartNewSessionRequestBody,
  ): Promise<StartNewSessionResponse>;
}

export abstract class ValidateSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = VALIDATE_SESSION;
  public abstract handle(
    requestId: string,
    body: ValidateSessionRequestBody,
  ): Promise<ValidateSessionResponse>;
}
