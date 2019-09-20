const svgWidth = 800
const svgHeight = 400

const svg = d3
            .select('#chart')
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)

const bottomLine = 300
const circleRadius = 30
const bottomLineWidth = 5