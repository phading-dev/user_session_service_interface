import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface WebClientSession {
  sessionId?: string,
}

export let WEB_CLIENT_SESSION: MessageDescriptor<WebClientSession> = {
  name: 'WebClientSession',
  fields: [
    {
      name: 'sessionId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
