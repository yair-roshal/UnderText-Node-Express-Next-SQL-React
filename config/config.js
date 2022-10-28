import { NodeStyledComponent, LinkStyledComponent } from './_styled'

export const myConfig = {
    directed: true,
    nodeHighlightBehavior: true,
    maxZoom: 3,
    minZoom: 1,
    initialZoom: 2,

    d3: {
        linkLength: 180,
    },

    node: {
        size: 300,
        viewGenerator: node => <NodeStyledComponent>{node.id}</NodeStyledComponent>,
        renderLabel: false,
    },

    link: {
        highlightColor: 'lightgreen',
        fontSize: 8,
        fontWeight: 'normal',
        highlightFontWeight: 'bold',
        highlightFontSize: 12,
        opacity: 0.7,
        strokeWidth: 2,
        markerWidth: 7,
        markerHeight: 9,
        renderLabel: true,
        labelProperty: 'label',
        semanticStrokeWidth: true,
    },
}
