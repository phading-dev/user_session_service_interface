import { CheckCapabilityRequestBody, CHECK_CAPABILITY, CheckCapabilityResponse, RenewSessionRequestBody, RENEW_SESSION, RenewSessionResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class CheckCapabilityHandlerInterface implements WebHandlerInterface {
  public descriptor = CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: CheckCapabilityRequestBody,
    sessionStr: string,
  ): Promise<CheckCapabilityResponse>;
}

export abstract class RenewSessionHandlerInterface implements WebHandlerInterface {
  public descriptor = RENEW_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: RenewSessionRequestBody,
    sessionStr: string,
  ): Promise<RenewSessionResponse>;
}
