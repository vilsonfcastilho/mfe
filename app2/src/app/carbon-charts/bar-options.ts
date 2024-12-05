export default {
  title: 'Vertical simple bar (discrete)',
  axes: {
    left: {
      mapsTo: 'value'
    },
    bottom: {
      mapsTo: 'group',
      scaleType: 'labels'
    }
  },
  height: '400px',
  accessibility: {
    svgAriaLabel: 'Simple bar chart'
  }
}
