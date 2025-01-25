import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { Capabilities, CAPABILITIES, CapabilitiesMask, CAPABILITIES_MASK } from '../capabilities';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface CreateSessionRequestBody {
  userId?: string,
  accountId?: string,
  version?: number,
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
    name: 'version',
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

export interface UpdateCapabilitiesRequestBody {
  accountId?: string,
  version?: number,
  capabilities?: Capabilities,
}

export let UPDATE_CAPABILITIES_REQUEST_BODY: MessageDescriptor<UpdateCapabilitiesRequestBody> = {
  name: 'UpdateCapabilitiesRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'capabilities',
    index: 3,
    messageType: CAPABILITIES,
  }],
};

export interface UpdateCapabilitiesResponse {
}

export let UPDATE_CAPABILITIES_RESPONSE: MessageDescriptor<UpdateCapabilitiesResponse> = {
  name: 'UpdateCapabilitiesResponse',
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

export let UPDATE_CAPABILITIES: NodeRemoteCallDescriptor = {
  name: "UpdateCapabilities",
  path: "/UpdateCapabilities",
  body: {
    messageType: UPDATE_CAPABILITIES_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_CAPABILITIES_RESPONSE,
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
