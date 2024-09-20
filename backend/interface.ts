import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { UserSession, USER_SESSION } from './user_session';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export enum AccountType {
  CONSUMER = 1,
  PUBLISHER = 2,
}

export let ACCOUNT_TYPE: EnumDescriptor<AccountType> = {
  name: 'AccountType',
  values: [{
    name: 'CONSUMER',
    value: 1,
  }, {
    name: 'PUBLISHER',
    value: 2,
  }]
}

export interface CreateSessionRequestBody {
  userId?: string,
  accountId?: string,
  accountType?: AccountType,
}

export let CREATE_SESSION_REQUEST_BODY: MessageDescriptor<CreateSessionRequestBody> = {
  name: 'CreateSessionRequestBody',
  fields: [{
    name: 'userId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountType',
    index: 3,
    enumType: ACCOUNT_TYPE,
  }],
};

export interface CreateSessionResponse {
  signedSession?: string,
}

export let CREATE_SESSION_RESPONSE: MessageDescriptor<CreateSessionResponse> = {
  name: 'CreateSessionResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ExchangeSessionAndCheckCapabilityRequestBody {
  signedSession?: string,
  checkCanConsumeShows?: boolean,
  checkCanPublishShows?: boolean,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<ExchangeSessionAndCheckCapabilityRequestBody> = {
  name: 'ExchangeSessionAndCheckCapabilityRequestBody',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
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
  userSession?: UserSession,
  canConsumeShows?: boolean,
  canPublishShows?: boolean,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE: MessageDescriptor<ExchangeSessionAndCheckCapabilityResponse> = {
  name: 'ExchangeSessionAndCheckCapabilityResponse',
  fields: [{
    name: 'userSession',
    index: 1,
    messageType: USER_SESSION,
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

export let CREATE_SESSION: NodeRemoteCallDescriptor = {
  name: "CreateSession",
  path: "/CreateSession",
  body: {
    messageType: CREATE_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_SESSION_RESPONSE,
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
