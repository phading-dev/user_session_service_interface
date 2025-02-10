import { MessageDescriptor } from '@selfage/message/descriptor';
import { CapabilitiesMask, CAPABILITIES_MASK, Capabilities, CAPABILITIES } from '../capabilities';
import { USER_SESSION_WEB_SERVICE } from '../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

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

export let CHECK_CAPABILITY: RemoteCallDescriptor = {
  name: "CheckCapability",
  service: USER_SESSION_WEB_SERVICE,
  path: "/CheckCapability",
  body: {
    messageType: CHECK_CAPABILITY_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CHECK_CAPABILITY_RESPONSE,
  },
}

export let RENEW_SESSION: RemoteCallDescriptor = {
  name: "RenewSession",
  service: USER_SESSION_WEB_SERVICE,
  path: "/RenewSession",
  body: {
    messageType: RENEW_SESSION_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: RENEW_SESSION_RESPONSE,
  },
}
