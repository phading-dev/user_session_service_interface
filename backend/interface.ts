import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { WebClientSession, WEB_CLIENT_SESSION } from '../web_client_session';
import { ServiceDescriptor } from '@selfage/service_descriptor';

export interface StartNewSessionRequestBody {
  authId?: string,
  accountId?: string,
}

export let START_NEW_SESSION_REQUEST_BODY: MessageDescriptor<StartNewSessionRequestBody> = {
  name: 'StartNewSessionRequestBody',
  fields: [
    {
      name: 'authId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface StartNewSessionResponse {
  webClientSession?: WebClientSession,
}

export let START_NEW_SESSION_RESPONSE: MessageDescriptor<StartNewSessionResponse> = {
  name: 'StartNewSessionResponse',
  fields: [
    {
      name: 'webClientSession',
      messageType: WEB_CLIENT_SESSION,
    },
  ]
};

export let START_NEW_SESSION: ServiceDescriptor = {
  name: "StartNewSession",
  path: "/StartNewSession",
  body: {
    messageType: START_NEW_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: START_NEW_SESSION_RESPONSE,
  },
}

export interface ValidateSessionRequestBody {
  sessionId?: string,
}

export let VALIDATE_SESSION_REQUEST_BODY: MessageDescriptor<ValidateSessionRequestBody> = {
  name: 'ValidateSessionRequestBody',
  fields: [
    {
      name: 'sessionId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface ValidateSessionResponse {
  valid?: boolean,
}

export let VALIDATE_SESSION_RESPONSE: MessageDescriptor<ValidateSessionResponse> = {
  name: 'ValidateSessionResponse',
  fields: [
    {
      name: 'valid',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};

export let VALIDATE_SESSION: ServiceDescriptor = {
  name: "ValidateSession",
  path: "/ValidateSession",
  body: {
    messageType: VALIDATE_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: VALIDATE_SESSION_RESPONSE,
  },
}
