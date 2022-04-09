import { WheelSegment } from '../../../../components/UI/WinWheel/models/wheel-segment';
import { ClubBooks } from '../../../../models/club-books';

export type ClubWheelSegmentsState = {
  data: WheelSegment[];
}

export type CreateClubWheelSegmentsPayload = ClubBooks[];
export type RemoveClubWheelSegmentPayload = WheelSegment;
