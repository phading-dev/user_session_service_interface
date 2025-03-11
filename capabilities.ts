import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Capabilities {
  canConsume?: boolean,
  canPublish?: boolean,
  canBeBilled?: boolean,
  canEarn?: boolean,
}

export let CAPABILITIES: MessageDescriptor<Capabilities> = {
  name: 'Capabilities',
  fields: [{
    name: 'canConsume',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'canPublish',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'canBeBilled',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'canEarn',
    index: 4,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface CapabilitiesMask {
  checkCanConsume?: boolean,
  checkCanPublish?: boolean,
  checkCanBeBilled?: boolean,
  checkCanEarn?: boolean,
}

export let CAPABILITIES_MASK: MessageDescriptor<CapabilitiesMask> = {
  name: 'CapabilitiesMask',
  fields: [{
    name: 'checkCanConsume',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'checkCanPublish',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'checkCanBeBilled',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'checkCanEarn',
    index: 4,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};
