import { ClientType } from '@selfage/service_descriptor/client_type';
import { HttpsServiceDescriptor, HttpServiceDescriptor } from '@selfage/service_descriptor';

export let USER_SESSION_WEB_SERVICE: HttpsServiceDescriptor = {
  name: "UserSessionWebService",
  clientType: ClientType.WEB,
  protocol: "https",
  port: 443,
}

export let USER_SESSION_NODE_SERVICE: HttpServiceDescriptor = {
  name: "UserSessionNodeService",
  clientType: ClientType.NODE,
  protocol: "http",
  port: 80,
}
