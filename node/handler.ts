import { CreateSessionRequestBody, CREATE_SESSION, CreateSessionResponse, UpdateAccountCapabilitiesRequestBody, UPDATE_ACCOUNT_CAPABILITIES, UpdateAccountCapabilitiesResponse, ExchangeSessionAndCheckCapabilityRequestBody, EXCHANGE_SESSION_AND_CHECK_CAPABILITY, ExchangeSessionAndCheckCapabilityResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class CreateSessionHandlerInterface implements NodeHandlerInterface {
  public descriptor = CREATE_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: CreateSessionRequestBody,
  ): Promise<CreateSessionResponse>;
}

export abstract class UpdateAccountCapabilitiesHandlerInterface implements NodeHandlerInterface {
  public descriptor = UPDATE_ACCOUNT_CAPABILITIES;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAccountCapabilitiesRequestBody,
  ): Promise<UpdateAccountCapabilitiesResponse>;
}

export abstract class ExchangeSessionAndCheckCapabilityHandlerInterface implements NodeHandlerInterface {
  public descriptor = EXCHANGE_SESSION_AND_CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: ExchangeSessionAndCheckCapabilityRequestBody,
  ): Promise<ExchangeSessionAndCheckCapabilityResponse>;
}
