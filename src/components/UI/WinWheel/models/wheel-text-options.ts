export interface WheelTextOptions {
  readonly textFontFamily?: string;
  readonly textFontSize?: number;
  readonly textFontWeight?: number | string;
  readonly textOrientation?: 'horizontal' | 'vertical' | 'curved';
  readonly textAlignment?: 'inner' | 'outer' | 'center';
  readonly textDirection?: 'normal' | 'reversed';
  readonly textMargin?: number | null;
  readonly textFillStyle?: string;
  readonly textStrokeStyle?: string | null;
  readonly textLineWidth?: number;
}