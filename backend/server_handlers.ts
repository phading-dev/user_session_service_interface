import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { CREATE_CLIENT_SESSION, CreateClientSessionRequestBody, CreateClientSessionResponse, EXCHANGE_SESSION_AND_CHECK_CAPABILITY, ExchangeSessionAndCheckCapabilityRequestBody, ExchangeSessionAndCheckCapabilityResponse } from './interface';

export abstract class CreateClientSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_CLIENT_SESSION;
  public abstract handle(
    loggingPrefix: string,
    body: CreateClientSessionRequestBody,
  ): Promise<CreateClientSessionResponse>;
}

export abstract class ExchangeSessionAndCheckCapabilityHandlerInterface implements ServiceHandlerInterface {
  public descriptor = EXCHANGE_SESSION_AND_CHECK_CAPABILITY;
  public abstract handle(
    loggingPrefix: string,
    body: ExchangeSessionAndCheckCapabilityRequestBody,
  ): Promise<ExchangeSessionAndCheckCapabilityResponse>;
}
