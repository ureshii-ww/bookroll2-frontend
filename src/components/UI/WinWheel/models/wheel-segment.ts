export interface WheelSegment {
  readonly text?: string;
  readonly value?: {
    readonly bookId: string;
    readonly userUrl: string;
  }
  readonly size?: number | null;
  readonly fillStyle?: string | null;
  readonly strokeStyle?: string | null;
  readonly lineWidth?: number | null;
  readonly textFontFamily?: string | null;
  readonly textFontWeight?: number | string | null;
  readonly textOrientation?: 'horizontal' | 'vertical' | 'curved' | null;
  readonly textAlignment?: 'inner' | 'outer' | 'center' | null;
  readonly textDirection?: 'normal' | 'reversed' | null;
  readonly textMargin?: number | null;
  readonly textFillStyle?: string | null;
  readonly textStrokeStyle?: string | null;
  readonly textLineWidth?: number | null;
  readonly image?: string | null;
  readonly imageDirection?: 'N' | 'E' | 'S' | 'W' | null;
  readonly imgData?: ImageData;
}