import React, { FC, useEffect } from 'react';
import { Winwheel } from '../../../winwheel/winwheel';
import { WinWheelProps } from './models/win-wheel-props';

const WinWheel: FC<WinWheelProps> = (props) => {
  const { sizeOptions, textOptions, animationOptions, segments, handleWinner } = props;

  useEffect(() => {
    const wheel = new Winwheel({
      canvasId: 'wheelCanvas',
      numSegments: segments.length,
      segments: segments,
      ...sizeOptions,
      ...textOptions,
      animation: {
        callbackFinished: handleWinner,
        ...animationOptions
      },
    });
    wheel.startAnimation();
  }, []);

  return <canvas id='wheelCanvas' width={sizeOptions?.canvasWidth || 400} height={sizeOptions?.canvasHeight || 400} />;
};

export default WinWheel;
