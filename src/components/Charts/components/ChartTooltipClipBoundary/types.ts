import type {ViewProps} from 'react-native';

type ChartTooltipClipBoundaryProps = Pick<ViewProps, 'children' | 'style'> & {
    enabled: boolean;
};

export default ChartTooltipClipBoundaryProps;
