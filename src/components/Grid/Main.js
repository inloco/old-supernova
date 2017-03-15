import React from 'react'

function getGridTypeClassName(vertical, reverse) {
  const gridType = vertical ? 'sn-grid--vertical' : 'sn-grid--horizontal'

  return reverse ? `${gridType}-reverse` : gridType
}

function getResponsiveClassName(responsive) {
  return responsive ? `sn-grid--responsive-${responsive}`: ''
}

function getBleedClassName(bleed) {
  if(bleed) {
    return typeof bleed === 'string'
              ? `sn-grid--bleed-${bleed}`
              : 'sn-grid--bleed'
  }

  return ''
}

function getGutterClassName(gutter) {
  if(gutter) {
    return typeof gutter === 'string'
              ? `sn-grid--cell-gutter-${gutter}`
              : 'sn-grid--cell-gutter'
  }

  return ''
}

function getPaddingClassName(padding) {
  if(padding) {
    return typeof padding === 'string'
              ? `sn-grid--cell-padding-${padding}`
              : 'sn-grid--cell-padding'
  }

  return ''
}

function getWrapClassName(wrap) {
  const wrapClassName = 'sn-grid--cell-'

  if(wrap === undefined) return ''

  if(wrap === 'nowrap') return `${wrapClassName}nowrap`

  return typeof wrap === 'string'
           ? `${wrapClassName}wrap-${wrap}`
           : `${wrapClassName}wrap`
}

function getAlignClassName(align) {
  return align ? `sn-grid--align-${align}` : ''
}

function getAlignJustifyClassName(alignJustify) {
  return alignJustify ? `sn-grid--justify-${alignJustify}` : ''
}

function getAlignContentClassName(alignContent) {
  return alignContent ? `sn-grid--content-${alignContent}` : ''
}

const Grid = props => {
  const {
    vertical,
    reverse,
    responsive,
    bleed,
    gutter,
    padding,
    wrap,
    align,
    alignJustify,
    alignContent,
    className,
    ...gridProps
  } = props
  const gridTypeClassName = getGridTypeClassName(vertical, reverse)
  const responsiveClassName = getResponsiveClassName(responsive)
  const bleedClassName = getBleedClassName(bleed)
  const gutterClassName = getGutterClassName(gutter)
  const paddingClassName = getPaddingClassName(padding)
  const wrapClassName = getWrapClassName(wrap)
  const alignClassName = getAlignClassName(align)
  const alignJustifyClassName = getAlignJustifyClassName(alignJustify)
  const alignContentClassName = getAlignContentClassName(alignContent)

  return (
    <div
      className={`
        sn-grid
        ${gridTypeClassName}
        ${responsiveClassName}
        ${bleedClassName}
        ${gutterClassName}
        ${paddingClassName}
        ${wrapClassName}
        ${alignClassName}
        ${alignJustifyClassName}
        ${alignContentClassName}
        ${className}
      `} {...gridProps}
    />
  )
}

export default Grid
