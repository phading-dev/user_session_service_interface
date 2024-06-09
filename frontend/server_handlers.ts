import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RENEW_CLIENT_SESSION, RenewClientSessionRequestBody, RenewClientSessionResponse } from './interface';
import { ClientSession } from '../client_session';

export abstract class RenewClientSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RENEW_CLIENT_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: RenewClientSessionRequestBody,
    auth: ClientSession,
  ): Promise<RenewClientSessionResponse>;
}
