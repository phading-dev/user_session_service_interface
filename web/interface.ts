import { MessageDescriptor } from '@selfage/message/descriptor';
import { CapabilitiesMask, CAPABILITIES_MASK, Capabilities, CAPABILITIES } from '../capabilities';
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
  capabilitiesMask?: CapabilitiesMask,
}

export let CHECK_CAPABILITY_REQUEST_BODY: MessageDescriptor<CheckCapabilityRequestBody> = {
  name: 'CheckCapabilityRequestBody',
  fields: [{
    name: 'capabilitiesMask',
    index: 1,
    messageType: CAPABILITIES_MASK,
  }],
};

export interface CheckCapabilityResponse {
  capabilities?: Capabilities,
}

export let CHECK_CAPABILITY_RESPONSE: MessageDescriptor<CheckCapabilityResponse> = {
  name: 'CheckCapabilityResponse',
  fields: [{
    name: 'capabilities',
    index: 1,
    messageType: CAPABILITIES,
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
