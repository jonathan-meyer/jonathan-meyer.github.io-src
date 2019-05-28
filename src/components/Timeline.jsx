import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Entry from './entry'

const config = {
  // global
  paddingTop: 50,
  mediaWidthMed: 900,
  mediaWidthSmall: 700,
  activeColor: '#F45B69',
  color: 'black',
  twoSidedOverlap: 80, // negative overlap between items if two-sided
  animations: true,
  addEvenPropToChildren: false,

  // line
  lineColor: '#FFF',
  circleWidth: 30,
  paddingToItem: 30,
  paddingToItemSmall: 20,
  lineWidth: 5,

  // triangle
  triangleWidth: 16,
  triangleHeight: 8,

  // list item content
  itemWidth: 350,
  itemWidthMed: 250,
  offsetHidden: 200,
  triangleOffset: 7,
  smallItemWidthPadding: 50,
  itemPadding: 16,
  evenItemOffset: 0, // important when using bootstrap.css
}

export class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { twoSided: true }
    this.onTwoSidedChange = this.onTwoSidedChange.bind(this)
    this.componentWillReceiveProps(props)
  }

  /**
   * Merge config with default only once (optimize)
   */
  componentWillReceiveProps(newProps) {
    //eslint-disable-next-line no-unused-vars
    const { children, ...config } = newProps // children are not config
    this.mergedConfig = {
      ...defaultConfig,
      ...config,
    }
  }

  componentWillMount() {
    const { mediaWidthSmall } = this.mergedConfig
    if (window && window.matchMedia) {
      this.mqTwoSided = window.matchMedia(`(min-width: ${mediaWidthSmall}px)`)
      this.mqTwoSided.addListener(this.onTwoSidedChange)
      this.onTwoSidedChange(this.mqTwoSided)
    }
  }

  componentWillUnmount() {
    if (this.mqTwoSided) {
      this.mqTwoSided.removeListener(this.onTwoSidedChange)
    }
  }

  onTwoSidedChange(mq) {
    this.setState({ twoSided: mq.matches })
  }

  render() {
    const { children } = this.props
    const { color, twoSidedOverlap } = this.mergedConfig
    const twoSided = this.state.twoSided
    let i = 0

    const styles = {
      base: {
        textAlign: 'center',
        paddingBottom: twoSided && twoSidedOverlap + 'px',
        color: color,
        overflow: 'hidden',
        [this.mqTwoSidedString]: {
          marginBottom: twoSidedOverlap + 'px',
        }
      }
    }

    return (
      <div style={[styles.base]}>
        {React.Children.map(children, c =>
          <Entry even={i++ % 2 === 0 && twoSided} config={this.mergedConfig}
            icon={c.props.icon}>
            {c}
          </Entry>
        )}
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,

  // global
  paddingTop: PropTypes.number,
  mediaWidthMed: PropTypes.number,
  mediaWidthSmall: PropTypes.number,
  activeColor: PropTypes.string,
  color: PropTypes.string,
  twoSidedOverlap: PropTypes.number,
  animations: PropTypes.bool,
  addEvenPropToChildren: PropTypes.bool,

  // line
  lineColor: PropTypes.string,
  circleWidth: PropTypes.number,
  paddingToItem: PropTypes.number,
  paddingToItemSmall: PropTypes.number,
  lineWidth: PropTypes.number,

  // triangle
  triangleWidth: PropTypes.number,
  triangleHeight: PropTypes.number,

  // list item content
  itemWidth: PropTypes.number,
  itemWidthMed: PropTypes.number,
  offsetHidden: PropTypes.number,
  triangleOffset: PropTypes.number,
  smallItemWidthPadding: PropTypes.number,
  itemPadding: PropTypes.number,
  evenItemOffset: PropTypes.number,
}

export default Radium(Timeline)
