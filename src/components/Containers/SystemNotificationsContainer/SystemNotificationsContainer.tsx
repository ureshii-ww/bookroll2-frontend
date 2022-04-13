import React, { FC } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Notification from '../../UI/SystemNotification/Notification';
import './system-notification-container.scss';

const SystemNotificationsContainer: FC = () => {
  const notifications = useAppSelector(state => state.systemNotifications.notifications);

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <Notification
          key={`notification-${notification.id}`}
          message={notification.message}
          notificationType={notification.notificationType}
        />
      ))}
    </div>
  );
};

export default SystemNotificationsContainer;
