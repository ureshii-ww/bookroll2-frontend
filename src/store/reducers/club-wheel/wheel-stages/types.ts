export enum WheelStages {
  START = 'START',
  ROLL = 'ROLL',
  WINNER = 'WINNER',
  FINISH = 'FINISH',
}

export type ClubWheelStagesState = {
  currentStage: WheelStages;
};

export type SetClubWheelStagePayload = WheelStages;