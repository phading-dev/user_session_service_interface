import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface RenewSessionRequestBody {
}

export let RENEW_SESSION_REQUEST_BODY: MessageDescriptor<RenewSessionRequestBody> = {
  name: 'RenewSessionRequestBody',
  fields: [],
};

export interface RenewSessionResponse {
}

export let RENEW_SESSION_RESPONSE: MessageDescriptor<RenewSessionResponse> = {
  name: 'RenewSessionResponse',
  fields: [],
};

export interface CheckCapabilityRequestBody {
  checkCanConsumeShows?: boolean,
  checkCanPublishShows?: boolean,
}

export let CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<CheckCapabilityRequestBody> = {
  name: 'CheckCapabilityRequestBody',
  fields: [{
    name: 'checkCanConsumeShows',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'checkCanPublishShows',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface CheckCapabilityResponse {
  canConsumeShows?: boolean,
  canPublishShows?: boolean,
}

export let CHECK_CAPABILITY_RESPONSE: MessageDescriptor<CheckCapabilityResponse> = {
  name: 'CheckCapabilityResponse',
  fields: [{
    name: 'canConsumeShows',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'canPublishShows',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export let CHECK_CAPABILITY: WebRemoteCallDescriptor = {
  name: "CheckCapability",
  path: "/CheckCapability",
  body: {
    messageType: CHECK_CAPABILITY_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CHECK_CAPABILITY_RESPONSE,
  },
}

export let RENEW_SESSION: WebRemoteCallDescriptor = {
  name: "RenewSession",
  path: "/RenewSession",
  body: {
    messageType: RENEW_SESSION_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: RENEW_SESSION_RESPONSE,
  },
}
