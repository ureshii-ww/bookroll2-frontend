import { WheelSegment } from './wheel-segment';
import { WheelTextOptions } from './wheel-text-options';
import { WheelSizeOptions } from './wheel-size-options';
import { WheelAnimationOptions } from './wheel-animation-options';
import { WheelRenderOptions } from './wheel-render-options';

export interface WinWheelProps {
  readonly sizeOptions?: WheelSizeOptions;
  readonly textOptions?: WheelTextOptions;
  readonly renderOptions?: WheelRenderOptions;
  readonly animationOptions?: WheelAnimationOptions;
  readonly handleWinner: (segment: WheelSegment) => void;
  readonly segments: WheelSegment[];
}