import { CreateSessionRequestBody, CreateSessionResponse, CREATE_SESSION, UpdateAccountCapabilitiesRequestBody, UpdateAccountCapabilitiesResponse, UPDATE_ACCOUNT_CAPABILITIES, ExchangeSessionAndCheckCapabilityRequestBody, ExchangeSessionAndCheckCapabilityResponse, EXCHANGE_SESSION_AND_CHECK_CAPABILITY } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newCreateSessionRequest(
  body: CreateSessionRequestBody,
): ClientRequestInterface<CreateSessionResponse> {
  return {
    descriptor: CREATE_SESSION,
    body,
  };
}

export function newUpdateAccountCapabilitiesRequest(
  body: UpdateAccountCapabilitiesRequestBody,
): ClientRequestInterface<UpdateAccountCapabilitiesResponse> {
  return {
    descriptor: UPDATE_ACCOUNT_CAPABILITIES,
    body,
  };
}

export function newExchangeSessionAndCheckCapabilityRequest(
  body: ExchangeSessionAndCheckCapabilityRequestBody,
): ClientRequestInterface<ExchangeSessionAndCheckCapabilityResponse> {
  return {
    descriptor: EXCHANGE_SESSION_AND_CHECK_CAPABILITY,
    body,
  };
}
