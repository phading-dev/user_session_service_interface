import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { ClientSession, CLIENT_SESSION } from '../client_session';
import { PlainSession, PLAIN_SESSION } from './plain_session';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface CreateClientSessionRequestBody {
  userId?: string,
  accountId?: string,
}

export let CREATE_CLIENT_SESSION_REQUEST_BODY: MessageDescriptor<CreateClientSessionRequestBody> = {
  name: 'CreateClientSessionRequestBody',
  fields: [{
    name: 'userId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface CreateClientSessionResponse {
  signedSession?: string,
}

export let CREATE_CLIENT_SESSION_RESPONSE: MessageDescriptor<CreateClientSessionResponse> = {
  name: 'CreateClientSessionResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ExchangeSessionAndCheckCapabilityRequestBody {
  clientSession?: ClientSession,
  checkCanConsumeShows?: boolean,
  checkCanPublishShows?: boolean,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<ExchangeSessionAndCheckCapabilityRequestBody> = {
  name: 'ExchangeSessionAndCheckCapabilityRequestBody',
  fields: [{
    name: 'clientSession',
    index: 1,
    messageType: CLIENT_SESSION,
  }, {
    name: 'checkCanConsumeShows',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'checkCanPublishShows',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface ExchangeSessionAndCheckCapabilityResponse {
  plainSession?: PlainSession,
  canConsumeShows?: boolean,
  canPublishShows?: boolean,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE: MessageDescriptor<ExchangeSessionAndCheckCapabilityResponse> = {
  name: 'ExchangeSessionAndCheckCapabilityResponse',
  fields: [{
    name: 'plainSession',
    index: 1,
    messageType: PLAIN_SESSION,
  }, {
    name: 'canConsumeShows',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'canPublishShows',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export let CREATE_CLIENT_SESSION: NodeRemoteCallDescriptor = {
  name: "CreateClientSession",
  path: "/CreateClientSession",
  body: {
    messageType: CREATE_CLIENT_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_CLIENT_SESSION_RESPONSE,
  },
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY: NodeRemoteCallDescriptor = {
  name: "ExchangeSessionAndCheckCapability",
  path: "/ExchangeSessionAndCheckCapability",
  body: {
    messageType: EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY,
  },
  response: {
    messageType: EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE,
  },
}
