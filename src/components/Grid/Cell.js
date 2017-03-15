import React from 'react'

function getSizeClassName(size) {
  return size ? `sn-cell--${size}` : ''
}

function getPercentClassName(percent) {
  return percent ? `sn-cell--${percent}perc` : ''
}

function getExponentialClassName(exponential) {
  return exponential ? `sn-cell--${exponential}expo` : ''
}

function getDynamicClassName(dynamic) {
  return dynamic ? `sn-cell--${dynamic}` : ''
}

function getPaddingClassName(padding) {
  if(padding) {
    return typeof padding === 'string'
              ? `sn-cell--padding-${padding}`
              : 'sn-cell--padding'
  }

  return ''
}

function getOrderClassName(order) {
  return order ? `sn-cell--order-${order}` : ''
}

function getAlignClassName(align) {
  return align ? `sn-cell--item-${align}` : ''
}

function getAlignContentClassName(alignContent) {
  return alignContent ? `sn-cell--text-${alignContent}` : ''
}

function getWrapClassName(wrap) {
  return wrap ? `sn-cell--${wrap}` : ''
}

function getEllipsisClassName(ellipsis) {
  return ellipsis ? 'sn-cell--ellipsis' : ''
}

const Cell = props => {
  const {
    size,
    percent,
    exponential,
    dynamic,
    padding,
    order,
    align,
    alignContent,
    wrap,
    ellipsis,
    className,
    ...cellProps
  } = props
  const sizeClassName = getSizeClassName(size)
  const percentClassName = getPercentClassName(percent)
  const exponentialClassName = getExponentialClassName(exponential)
  const dynamicClassName = getDynamicClassName(dynamic)
  const paddingClassName = getPaddingClassName(padding)
  const orderClassName = getOrderClassName(order)
  const alignClassName = getAlignClassName(align)
  const alignContentClassName = getAlignContentClassName(alignContent)
  const wrapClassName = getWrapClassName(wrap)
  const ellipsisClassName = getEllipsisClassName(ellipsis)

  return (
    <div
      className={`
        ${sizeClassName}
        ${className}
        ${percentClassName}
        ${exponentialClassName}
        ${dynamicClassName}
        ${paddingClassName}
        ${orderClassName}
        ${alignClassName}
        ${alignContentClassName}
        ${wrapClassName}
        ${ellipsisClassName}
      `} {...cellProps}
    />
  )
}

export default Cell