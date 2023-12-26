import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { RENEW_WEB_CLIENT_SESSION, RenewWebClientSessionRequestBody, RenewWebClientSessionResponse } from './interface';
import { WebClientSession } from '../web_client_session';

export abstract class RenewWebClientSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RENEW_WEB_CLIENT_SESSION;
  public abstract handle(
    requestId: string,
    body: RenewWebClientSessionRequestBody,
    auth: WebClientSession,
  ): Promise<RenewWebClientSessionResponse>;
}
