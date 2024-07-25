import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PlainSession {
  sessionId?: string,
  userId?: string,
  accountId?: string,
}

export let PLAIN_SESSION: MessageDescriptor<PlainSession> = {
  name: 'PlainSession',
  fields: [
    {
      name: 'sessionId',
      primitiveType: PrimitiveType.STRING,
    },
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
