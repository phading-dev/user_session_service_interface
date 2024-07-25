import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '../client_session';

export interface RenewClientSessionRequestBody {
}

export let RENEW_CLIENT_SESSION_REQUEST_BODY: MessageDescriptor<RenewClientSessionRequestBody> = {
  name: 'RenewClientSessionRequestBody',
  fields: [
  ]
};

export interface RenewClientSessionResponse {
  signedSession?: string,
}

export let RENEW_CLIENT_SESSION_RESPONSE: MessageDescriptor<RenewClientSessionResponse> = {
  name: 'RenewClientSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let RENEW_CLIENT_SESSION: ServiceDescriptor = {
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

export interface CheckCapabilityRequestBody {
  checkCanConsumeShows?: boolean,
  checkCanPublishShows?: boolean,
}

export let CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<CheckCapabilityRequestBody> = {
  name: 'CheckCapabilityRequestBody',
  fields: [
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

export interface CheckCapabilityResponse {
  canConsumeShows?: boolean,
  canPublishShows?: boolean,
}

export let CHECK_CAPABILITY_RESPONSE: MessageDescriptor<CheckCapabilityResponse> = {
  name: 'CheckCapabilityResponse',
  fields: [
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

export let CHECK_CAPABILITY: ServiceDescriptor = {
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
