import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../account_type';

export interface SessionData {
  sessionId?: string,
  userId?: string,
  accountId?: string,
  accountType?: AccountType,
}

export let SESSION_DATA: MessageDescriptor<SessionData> = {
  name: 'SessionData',
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
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
  ]
};
