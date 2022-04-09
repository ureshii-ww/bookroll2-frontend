import { ClubWheelStagesState, SetClubWheelStagePayload, WheelStages } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ClubWheelStagesState = {
  currentStage: WheelStages.START,
};

const clubWheelStagesSlice = createSlice({
  name: 'clubWheelStages',
  initialState,
  reducers: {
    setClubWheelStage(state, action: PayloadAction<SetClubWheelStagePayload>) {
      state.currentStage = action.payload;
    },
    resetClubWheelStage(state) {
      state.currentStage = WheelStages.START;
    }
  },
});

export const { setClubWheelStage, resetClubWheelStage } = clubWheelStagesSlice.actions;
const clubWheelStagesReducer = clubWheelStagesSlice.reducer;
export default clubWheelStagesReducer;
