import { CheckCapabilityRequestBody, CHECK_CAPABILITY, CheckCapabilityResponse, RenewClientSessionRequestBody, RENEW_CLIENT_SESSION, RenewClientSessionResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class CheckCapabilityHandlerInterface implements WebHandlerInterface {
  public descriptor = CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: CheckCapabilityRequestBody,
    sessionStr: string,
  ): Promise<CheckCapabilityResponse>;
}

export abstract class RenewClientSessionHandlerInterface implements WebHandlerInterface {
  public descriptor = RENEW_CLIENT_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: RenewClientSessionRequestBody,
    sessionStr: string,
  ): Promise<RenewClientSessionResponse>;
}
