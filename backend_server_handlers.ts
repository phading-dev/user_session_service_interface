import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { START_NEW_SESSION, StartNewSessionRequestBody, StartNewSessionResponse } from './backend_interface';

export abstract class StartNewSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = START_NEW_SESSION;
  public abstract handle(
    requestId: string,
    body: StartNewSessionRequestBody,
  ): Promise<StartNewSessionResponse>;
}
