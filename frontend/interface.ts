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
