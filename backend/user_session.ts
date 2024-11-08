import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface UserSession {
  userId?: string,
  accountId?: string,
}

export let USER_SESSION: MessageDescriptor<UserSession> = {
  name: 'UserSession',
  fields: [{
    name: 'userId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};
