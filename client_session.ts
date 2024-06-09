import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface ClientSession {
  sessionId?: string,
}

export let CLIENT_SESSION: MessageDescriptor<ClientSession> = {
  name: 'ClientSession',
  fields: [
    {
      name: 'sessionId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
