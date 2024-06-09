import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { ClientSession, CLIENT_SESSION } from '../client_session';
import { TrustedSession, TRUSTED_SESSION } from './trusted_session';

export interface CreateClientSessionRequestBody {
  userId?: string,
  accountId?: string,
}

export let CREATE_CLIENT_SESSION_REQUEST_BODY: MessageDescriptor<CreateClientSessionRequestBody> = {
  name: 'CreateClientSessionRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface CreateClientSessionResponse {
  signedSession?: string,
}

export let CREATE_CLIENT_SESSION_RESPONSE: MessageDescriptor<CreateClientSessionResponse> = {
  name: 'CreateClientSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_CLIENT_SESSION: ServiceDescriptor = {
  name: "CreateClientSession",
  path: "/CreateClientSession",
  body: {
    messageType: CREATE_CLIENT_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_CLIENT_SESSION_RESPONSE,
  },
}

export interface ValidateAndRetrieveTrustedSessionRequestBody {
  clientSession?: ClientSession,
}

export let VALIDATE_AND_RETRIEVE_TRUSTED_SESSION_REQUEST_BODY: MessageDescriptor<ValidateAndRetrieveTrustedSessionRequestBody> = {
  name: 'ValidateAndRetrieveTrustedSessionRequestBody',
  fields: [
    {
      name: 'clientSession',
      messageType: CLIENT_SESSION,
    },
  ]
};

export interface ValidateAndRetrieveTrustedSessionResponse {
  trustedSession?: TrustedSession,
}

export let VALIDATE_AND_RETRIEVE_TRUSTED_SESSION_RESPONSE: MessageDescriptor<ValidateAndRetrieveTrustedSessionResponse> = {
  name: 'ValidateAndRetrieveTrustedSessionResponse',
  fields: [
    {
      name: 'trustedSession',
      messageType: TRUSTED_SESSION,
    },
  ]
};

export let VALIDATE_AND_RETRIEVE_TRUSTED_SESSION: ServiceDescriptor = {
  name: "ValidateAndRetrieveTrustedSession",
  path: "/ValidateAndRetrieveTrustedSession",
  body: {
    messageType: VALIDATE_AND_RETRIEVE_TRUSTED_SESSION_REQUEST_BODY,
  },
  response: {
    messageType: VALIDATE_AND_RETRIEVE_TRUSTED_SESSION_RESPONSE,
  },
}
