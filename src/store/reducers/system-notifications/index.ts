import {
  SetSystemNotificationPayload,
  DeleteSystemNotificationPayload,
  SystemNotificationsState,
  AddSystemNotificationPayload,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SystemNotificationsState = {
  notifications: [],
};

const systemNotificationsSlice = createSlice({
  name: 'systemNotifications',
  initialState,
  reducers: {
    setSystemNotification(state, action: PayloadAction<SetSystemNotificationPayload>) {
      state.notifications.push(action.payload);
    },
    deleteSystemNotification(state, action: PayloadAction<DeleteSystemNotificationPayload>) {
      state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
    },
    addSystemNotification(state, action: PayloadAction<AddSystemNotificationPayload>) {},
  },
});

export const { setSystemNotification, deleteSystemNotification, addSystemNotification } =
  systemNotificationsSlice.actions;
export default systemNotificationsSlice.reducer;
