import { CreateSessionRequestBody, CREATE_SESSION, CreateSessionResponse, UpdateAccountCapabilitiesRequestBody, UPDATE_ACCOUNT_CAPABILITIES, UpdateAccountCapabilitiesResponse, FetchSessionAndCheckCapabilityRequestBody, FETCH_SESSION_AND_CHECK_CAPABILITY, FetchSessionAndCheckCapabilityResponse, DeleteExpiredSessionsRequestBody, DELETE_EXPIRED_SESSIONS, DeleteExpiredSessionsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class CreateSessionHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: CreateSessionRequestBody,
  ): Promise<CreateSessionResponse>;
}

export abstract class UpdateAccountCapabilitiesHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_ACCOUNT_CAPABILITIES;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAccountCapabilitiesRequestBody,
  ): Promise<UpdateAccountCapabilitiesResponse>;
}

export abstract class FetchSessionAndCheckCapabilityHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = FETCH_SESSION_AND_CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: FetchSessionAndCheckCapabilityRequestBody,
  ): Promise<FetchSessionAndCheckCapabilityResponse>;
}

export abstract class DeleteExpiredSessionsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = DELETE_EXPIRED_SESSIONS;
  public abstract handle(
    loggingPrefix: string,
    body: DeleteExpiredSessionsRequestBody,
  ): Promise<DeleteExpiredSessionsResponse>;
}
