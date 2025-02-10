import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Capabilities, CAPABILITIES, CapabilitiesMask, CAPABILITIES_MASK } from '../capabilities';
import { USER_SESSION_NODE_SERVICE } from '../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface CreateSessionRequestBody {
  userId?: string,
  accountId?: string,
  capabilitiesVersion?: number,
  capabilities?: Capabilities,
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
    name: 'capabilitiesVersion',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'capabilities',
    index: 4,
    messageType: CAPABILITIES,
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

export interface UpdateAccountCapabilitiesRequestBody {
  accountId?: string,
  capabilitiesVersion?: number,
  capabilities?: Capabilities,
}

export let UPDATE_ACCOUNT_CAPABILITIES_REQUEST_BODY: MessageDescriptor<UpdateAccountCapabilitiesRequestBody> = {
  name: 'UpdateAccountCapabilitiesRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'capabilitiesVersion',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'capabilities',
    index: 3,
    messageType: CAPABILITIES,
  }],
};

export interface UpdateAccountCapabilitiesResponse {
}

export let UPDATE_ACCOUNT_CAPABILITIES_RESPONSE: MessageDescriptor<UpdateAccountCapabilitiesResponse> = {
  name: 'UpdateAccountCapabilitiesResponse',
  fields: [],
};

export interface ExchangeSessionAndCheckCapabilityRequestBody {
  signedSession?: string,
  capabilitiesMask?: CapabilitiesMask,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<ExchangeSessionAndCheckCapabilityRequestBody> = {
  name: 'ExchangeSessionAndCheckCapabilityRequestBody',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'capabilitiesMask',
    index: 2,
    messageType: CAPABILITIES_MASK,
  }],
};

export interface ExchangeSessionAndCheckCapabilityResponse {
  userId?: string,
  accountId?: string,
  capabilities?: Capabilities,
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE: MessageDescriptor<ExchangeSessionAndCheckCapabilityResponse> = {
  name: 'ExchangeSessionAndCheckCapabilityResponse',
  fields: [{
    name: 'userId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'capabilities',
    index: 3,
    messageType: CAPABILITIES,
  }],
};

export let CREATE_SESSION: RemoteCallDescriptor = {
  name: "CreateSession",
  service: USER_SESSION_NODE_SERVICE,
  path: "/CreateSession",
  body: {
    messageType: CREATE_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_SESSION_RESPONSE,
  },
}

export let UPDATE_ACCOUNT_CAPABILITIES: RemoteCallDescriptor = {
  name: "UpdateAccountCapabilities",
  service: USER_SESSION_NODE_SERVICE,
  path: "/UpdateAccountCapabilities",
  body: {
    messageType: UPDATE_ACCOUNT_CAPABILITIES_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_ACCOUNT_CAPABILITIES_RESPONSE,
  },
}

export let EXCHANGE_SESSION_AND_CHECK_CAPABILITY: RemoteCallDescriptor = {
  name: "ExchangeSessionAndCheckCapability",
  service: USER_SESSION_NODE_SERVICE,
  path: "/ExchangeSessionAndCheckCapability",
  body: {
    messageType: EXCHANGE_SESSION_AND_CHECK_CAPABILITY_REQUEST_BODY,
  },
  response: {
    messageType: EXCHANGE_SESSION_AND_CHECK_CAPABILITY_RESPONSE,
  },
}
