import variables from '@styles/variables';

import type ChildrenProps from '@src/types/utils/ChildrenProps';

import type {CSSProperties} from 'react';

import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import ChartTooltipClipTopContext from '../../context/ChartTooltipClipTopContext';

function getClipStyle(clipTop: number): CSSProperties {
    return {position: 'fixed', inset: 0, zIndex: variables.tooltipZIndex, pointerEvents: 'none', clipPath: `inset(${Math.max(0, clipTop)}px 0 0)`};
}

/** Keeps chart tooltips in window coordinates, even when a fixed header clips them. */
function ChartTooltipPortal({children}: ChildrenProps) {
    const clipTop = useContext(ChartTooltipClipTopContext);
    const body = document.querySelector('body');

    if (!body) {
        return null;
    }

    return ReactDOM.createPortal(clipTop === undefined ? children : <div style={getClipStyle(clipTop)}>{children}</div>, body);
}

export default ChartTooltipPortal;
