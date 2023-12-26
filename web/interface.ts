import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '../web_client_session';

export interface RenewWebClientSessionRequestBody {
}

export let RENEW_WEB_CLIENT_SESSION_REQUEST_BODY: MessageDescriptor<RenewWebClientSessionRequestBody> = {
  name: 'RenewWebClientSessionRequestBody',
  fields: [
  ]
};

export interface RenewWebClientSessionResponse {
  signedSession?: string,
}

export let RENEW_WEB_CLIENT_SESSION_RESPONSE: MessageDescriptor<RenewWebClientSessionResponse> = {
  name: 'RenewWebClientSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let RENEW_WEB_CLIENT_SESSION: ServiceDescriptor = {
  name: "RenewWebClientSession",
  path: "/RenewWebClientSession",
  body: {
    messageType: RENEW_WEB_CLIENT_SESSION_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: RENEW_WEB_CLIENT_SESSION_RESPONSE,
  },
}
