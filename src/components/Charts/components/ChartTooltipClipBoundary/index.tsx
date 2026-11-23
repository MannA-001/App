/** Lets a fixed header clip the root tooltip without moving its chart anchor into a new coordinate system. */
import ChartTooltipClipTopContext from '@components/Charts/context/ChartTooltipClipTopContext';

import {BoundsObserver} from '@react-ng/bounds-observer';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import type ChartTooltipClipBoundaryProps from './types';

function ChartTooltipClipBoundary({children, enabled, style}: ChartTooltipClipBoundaryProps) {
    const [clipTop, setClipTop] = useState<number>();

    const updateClipTop = ({y}: {y: number}) => setClipTop(y);

    return (
        <ChartTooltipClipTopContext.Provider value={enabled ? clipTop : undefined}>
            <View style={style}>
                {/* Observing a child lets the observer detect changes in the viewport when the toolbar wraps. */}
                <BoundsObserver
                    enabled={enabled}
                    onBoundsChange={updateClipTop}
                >
                    <View
                        pointerEvents="none"
                        style={StyleSheet.absoluteFill}
                    />
                </BoundsObserver>
                {children}
            </View>
        </ChartTooltipClipTopContext.Provider>
    );
}

export default ChartTooltipClipBoundary;
