import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface ClientSession {
  sessionId?: string,
}

export let CLIENT_SESSION: MessageDescriptor<ClientSession> = {
  name: 'ClientSession',
  fields: [{
    name: 'sessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};
