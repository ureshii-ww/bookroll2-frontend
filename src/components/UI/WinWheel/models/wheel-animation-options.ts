export interface WheelAnimationOptions {
  readonly type?: 'spinOngoing' | 'spinToStop' | 'spinAndBack' | 'custom';
  readonly duration?: number;
  readonly spins?: number;
  readonly yoyo?: boolean;
  readonly repeat?: -1 | 0 | 1 | null;
}