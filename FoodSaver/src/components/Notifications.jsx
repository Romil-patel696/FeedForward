import React from 'react';
import useNotification from '../hooks/useNotification';

const Notifications = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notifications">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <p>{notification.message}</p>
          <button onClick={() => removeNotification(notification.id)}>Close</button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
