import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { ClientSession, CLIENT_SESSION } from '../client_session';
import { PlainSession, PLAIN_SESSION } from './plain_session';

export interface CreateClientSessionRequestBody {
  userId?: string,
  accountId?: string,
}

export let CREATE_CLIENT_SESSION_REQUEST_BODY: MessageDescriptor<CreateClientSessionRequestBody> = {
  name: 'CreateClientSessionRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateClientSessionResponse {
  signedSession?: string,
}

export let CREATE_CLIENT_SESSION_RESPONSE: MessageDescriptor<CreateClientSessionResponse> = {
  name: 'CreateClientSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_CLIENT_SESSION: ServiceDescriptor = {
  name: "CreateClientSession",
  path: "/CreateClientSession",
  body: {
    messageType: CREATE_CLIENT_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_CLIENT_SESSION_RESPONSE,
  },
}

export interface ExchangeSessionAndCheckCapabilityRequestBody {
  clientSession?: ClientSession,
  checkCanConsumeShows?: boolean,
  checkCanPublishShows?: boolean,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<ExchangeSessionAndCheckCapabilityRequestBody> = {
  name: 'ExchangeSessionAndCheckCapabilityRequestBody',
  fields: [
    {
      name: 'clientSession',
      messageType: CLIENT_SESSION,
    },
    {
      name: 'checkCanConsumeShows',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'checkCanPublishShows',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};

export interface ExchangeSessionAndCheckCapabilityResponse {
  plainSession?: PlainSession,
  canConsumeShows?: boolean,
  canPublishShows?: boolean,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE: MessageDescriptor<ExchangeSessionAndCheckCapabilityResponse> = {
  name: 'ExchangeSessionAndCheckCapabilityResponse',
  fields: [
    {
      name: 'plainSession',
      messageType: PLAIN_SESSION,
    },
    {
      name: 'canConsumeShows',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'canPublishShows',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY: ServiceDescriptor = {
  name: "ExchangeSessionAndCheckCapability",
  path: "/ExchangeSessionAndCheckCapability",
  body: {
    messageType: EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY,
  },
  response: {
    messageType: EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE,
  },
}
