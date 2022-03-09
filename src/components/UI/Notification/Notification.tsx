import React, { FC } from 'react';
import { NotificationType } from '../../../store/reducers/notifications/types';
import './notification.scss';

interface NotificationProps {
  message: string;
  notificationType: NotificationType;
}

const Notification: FC<NotificationProps> = ({ message, notificationType, ...rest }) => {
  return (
    <div className={`notification notification--${notificationType}`}>
      <div className="notification__line" />
      <span>{message}</span>
    </div>
  );
};

export default Notification;
