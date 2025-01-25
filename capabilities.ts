import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface Capabilities {
  canConsumeShows?: boolean,
  canPublishShows?: boolean,
  canBeBilled?: boolean,
  canEarn?: boolean,
}

export let CAPABILITIES: MessageDescriptor<Capabilities> = {
  name: 'Capabilities',
  fields: [{
    name: 'canConsumeShows',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'canPublishShows',
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
  checkCanConsumeShows?: boolean,
  checkCanPublishShows?: boolean,
  checkCanBeBilled?: boolean,
  checkCanEarn?: boolean,
}

export let CAPABILITIES_MASK: MessageDescriptor<CapabilitiesMask> = {
  name: 'CapabilitiesMask',
  fields: [{
    name: 'checkCanConsumeShows',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'checkCanPublishShows',
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
