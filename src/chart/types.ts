import { ReactElement } from 'react';
import {
  BaseAxisProps,
  ChartCoordinate,
  ChartOffset,
  DataKey,
  LayoutType,
  Margin,
  StackOffsetType,
  TickItem,
} from '../util/types';
import { AxisStackGroups } from '../util/ChartUtils';
import { BoundingBox } from '../util/useGetBoundingClientRect';
import { TooltipPayloadType } from '../context/tooltipContext';
import { XAxisProps, YAxisProps, ZAxisProps } from '../index';
import { AngleAxisProps, RadiusAxisProps } from '../polar/types';

export type AxisMap = {
  [axisId: string]: BaseAxisProps;
};

export interface CategoricalChartState {
  chartX?: number;

  chartY?: number;

  dataStartIndex?: number;

  dataEndIndex?: number;

  activeTooltipIndex?: number;

  isTooltipActive?: boolean;

  updateId?: number;

  xAxisMap?: AxisMap;

  yAxisMap?: AxisMap;

  zAxisMap?: AxisMap;

  orderedTooltipTicks?: any;

  tooltipAxis?: BaseAxisProps;

  tooltipTicks?: TickItem[];

  graphicalItems?: ReadonlyArray<ReactElement>;

  activeCoordinate?: ChartCoordinate;

  offset?: ChartOffset;

  angleAxisMap?: AxisMap;

  radiusAxisMap?: AxisMap;

  formattedGraphicalItems?: any;

  /** active tooltip payload */
  activePayload?: TooltipPayloadType;

  /** Active label of data */
  activeLabel?: string;

  activeIndex?: number;

  xValue?: number;

  yValue?: number;

  legendBBox?: BoundingBox | null;

  prevDataKey?: DataKey<any>;
  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;
  stackGroups?: AxisStackGroups;

  tooltipPortal?: HTMLElement | null;
  cursorPortal?: SVGElement | null;
}

export type TooltipTrigger = 'hover' | 'click';

export type AxisObj = {
  xAxis?: XAxisProps;
  xAxisTicks?: Array<TickItem>;

  yAxis?: YAxisProps;
  yAxisTicks?: Array<TickItem>;

  zAxis?: ZAxisProps;
  zAxisTicks?: Array<TickItem>;

  angleAxis?: AngleAxisProps;
  angleAxisTicks?: Array<TickItem>;

  radiusAxis?: RadiusAxisProps;
  radiusAxisTicks?: Array<TickItem>;
};
