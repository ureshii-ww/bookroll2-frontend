import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Notification from '../../UI/Notification/Notification';
import './notification-container.scss';

const NotificationsContainer: FC = () => {
  const notifications = useAppSelector(state => state.event.notifications);

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

export default NotificationsContainer;
