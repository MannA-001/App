import React from 'react';
import {View} from 'react-native';

import type ChartTooltipClipBoundaryProps from './types';

function ChartTooltipClipBoundary({children, style}: ChartTooltipClipBoundaryProps) {
    return <View style={style}>{children}</View>;
}

export default ChartTooltipClipBoundary;
