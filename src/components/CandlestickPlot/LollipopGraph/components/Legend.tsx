import * as PropTypes from 'prop-types'
import * as React from 'react'

const renderDomainLegendItems = (uniqueDomains) => {
  return uniqueDomains.map((d, idx) => {
    return (
      <React.Fragment key={`${d.label}_${idx}`}>
        <rect
          fill={d.color}
          x={770}
          y={32 + (15 * idx) + 'px'}
          width={10}
          height={10}
        />
        <text
          x={785}
          y={40 + (15 * idx) + 'px'}
          style={{
            fontSize: '11px',
            fontFamily: 'arial'
          }}
        >
          {d.label}
        </text>
      </React.Fragment>)
  })
}

const pfamDomainsLegend = (domains) => {
  const uniqueDomains = Array.from(new Set(domains.map(d => d.label)))
    .map(label => ({
      label: label,
      color: domains.find(d => d.label === label).color
    }))
  return uniqueDomains.length ? (
    <g>
      <text x='770'
        y='20'
        style={{
          fontSize: '12px',
          fontWeight: 'bold',
          fontFamily: 'arial',
          fill: '#333'
        }}
      >
        Pfam domains:
      </text>
      {renderDomainLegendItems(uniqueDomains)}
    </g>
  ) : ''
}

interface legendInterface {
  domains:any
}

export default class legend extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    const {domains} = this.props;
    return domains ? pfamDomainsLegend(domains) : ""
  }
}

//const legend = (props:legendInterface) => {
//  const {domains} = props
//  return domains ? pfamDomainsLegend(domains) : ''
//}

