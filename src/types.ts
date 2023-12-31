import {
  componentStatuses,
  componentColors,
  componentPositions,
  componentSizes,
  componentShapes,
  bgColors,
  brandColors,
} from './constants';
import { DEFAULT_THEMES } from './defaultThemes';

export type DataTheme = DEFAULT_THEMES | (string & {});

export interface ComponentBaseProps {
  'data:theme'?: DataTheme;
}

export type ComponentColor = (typeof componentColors)[number];

export type ComponentPosition = (typeof componentPositions)[number];
export type ComponentShape = (typeof componentShapes)[number];
export type ComponentSize = (typeof componentSizes)[number];
export type ComponentStatus = (typeof componentStatuses)[number];
export type ComponentBrandColors = (typeof brandColors)[number];
export type ComponentBgColors = (typeof bgColors)[number];
