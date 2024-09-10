import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface PlainSession {
  sessionId?: string,
  userId?: string,
  accountId?: string,
}

export let PLAIN_SESSION: MessageDescriptor<PlainSession> = {
  name: 'PlainSession',
  fields: [{
    name: 'sessionId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'userId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};
