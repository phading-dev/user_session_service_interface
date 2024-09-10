import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { CLIENT_SESSION } from '../client_session';
import { WebRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface RenewClientSessionRequestBody {
}

export let RENEW_CLIENT_SESSION_REQUEST_BODY: MessageDescriptor<RenewClientSessionRequestBody> = {
  name: 'RenewClientSessionRequestBody',
  fields: [],
};

export interface RenewClientSessionResponse {
  signedSession?: string,
}

export let RENEW_CLIENT_SESSION_RESPONSE: MessageDescriptor<RenewClientSessionResponse> = {
  name: 'RenewClientSessionResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
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
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: CHECK_CAPABILITY_RESPONSE,
  },
}

export let RENEW_CLIENT_SESSION: WebRemoteCallDescriptor = {
  name: "RenewClientSession",
  path: "/RenewClientSession",
  body: {
    messageType: RENEW_CLIENT_SESSION_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: RENEW_CLIENT_SESSION_RESPONSE,
  },
}
