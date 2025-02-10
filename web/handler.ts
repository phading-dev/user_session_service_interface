import { CheckCapabilityRequestBody, CHECK_CAPABILITY, CheckCapabilityResponse, RenewSessionRequestBody, RENEW_SESSION, RenewSessionResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class CheckCapabilityHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: CheckCapabilityRequestBody,
    authStr: string,
  ): Promise<CheckCapabilityResponse>;
}

export abstract class RenewSessionHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = RENEW_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: RenewSessionRequestBody,
    authStr: string,
  ): Promise<RenewSessionResponse>;
}
