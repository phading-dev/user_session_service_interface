import { CreateSessionRequestBody, CreateSessionResponse, CREATE_SESSION, UpdateAccountCapabilitiesRequestBody, UpdateAccountCapabilitiesResponse, UPDATE_ACCOUNT_CAPABILITIES, FetchSessionAndCheckCapabilityRequestBody, FetchSessionAndCheckCapabilityResponse, FETCH_SESSION_AND_CHECK_CAPABILITY, DeleteExpiredSessionsRequestBody, DeleteExpiredSessionsResponse, DELETE_EXPIRED_SESSIONS } from './interface';
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

export function newFetchSessionAndCheckCapabilityRequest(
  body: FetchSessionAndCheckCapabilityRequestBody,
): ClientRequestInterface<FetchSessionAndCheckCapabilityResponse> {
  return {
    descriptor: FETCH_SESSION_AND_CHECK_CAPABILITY,
    body,
  };
}

export function newDeleteExpiredSessionsRequest(
  body: DeleteExpiredSessionsRequestBody,
): ClientRequestInterface<DeleteExpiredSessionsResponse> {
  return {
    descriptor: DELETE_EXPIRED_SESSIONS,
    body,
  };
}
