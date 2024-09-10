import { CreateClientSessionRequestBody, CREATE_CLIENT_SESSION, CreateClientSessionResponse, ExchangeSessionAndCheckCapabilityRequestBody, EXCHANGE_SESSION_AND_CHECK_CAPABILITY, ExchangeSessionAndCheckCapabilityResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class CreateClientSessionHandlerInterface implements NodeHandlerInterface {
  public descriptor = CREATE_CLIENT_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: CreateClientSessionRequestBody,
  ): Promise<CreateClientSessionResponse>;
}

export abstract class ExchangeSessionAndCheckCapabilityHandlerInterface implements NodeHandlerInterface {
  public descriptor = EXCHANGE_SESSION_AND_CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: ExchangeSessionAndCheckCapabilityRequestBody,
  ): Promise<ExchangeSessionAndCheckCapabilityResponse>;
}
