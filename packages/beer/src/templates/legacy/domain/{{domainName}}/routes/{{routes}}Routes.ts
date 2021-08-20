import { RouteProps } from '@shared/application/interfaces/RouteProps';
import { MessagingRoutes } from '@domains/messaging/application/enums/MessagingRoutes';
import { Messaging } from '@domains/messaging/ui/screens/Messaging';

export const {{routes}}Routes: RouteProps[] = [
  {
    path: MessagingRoutes.MAIN,
    component: Messaging,
    exact: true
  }
];
