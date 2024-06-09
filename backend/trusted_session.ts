import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../account_type';

export interface TrustedSession {
  sessionId?: string,
  userId?: string,
  accountId?: string,
  accountType?: AccountType,
}

export let TRUSTED_SESSION: MessageDescriptor<TrustedSession> = {
  name: 'TrustedSession',
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
