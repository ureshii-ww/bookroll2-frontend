export interface WheelRenderOptions {
  readonly centerX?: number | null;
  readonly centerY?: number | null;
  readonly drawMode?: 'code' | 'image' | 'segmentImage';
  readonly rotationAngle?: number;
  readonly fillStyle?: string;
  readonly strokeStyle?: string;
  readonly lineWidth?: number;
  readonly clearTheCanvas?: boolean;
  readonly imageOverlay?: boolean;
  readonly drawText?: boolean;
  readonly pointerAngle?: number;
  readonly imageDirection?: 'N' | 'S' | 'E' | 'W';
}