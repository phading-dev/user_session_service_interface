import { CheckCapabilityRequestBody, CheckCapabilityResponse, CHECK_CAPABILITY, RenewSessionRequestBody, RenewSessionResponse, RENEW_SESSION } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newCheckCapabilityRequest(
  body: CheckCapabilityRequestBody,
): ClientRequestInterface<CheckCapabilityResponse> {
  return {
    descriptor: CHECK_CAPABILITY,
    body,
  };
}

export function newRenewSessionRequest(
  body: RenewSessionRequestBody,
): ClientRequestInterface<RenewSessionResponse> {
  return {
    descriptor: RENEW_SESSION,
    body,
  };
}
