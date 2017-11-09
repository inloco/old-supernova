// Credits to https://github.com/andreypopp/react-textarea-autosize/

const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`

const SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]

let hiddenTextarea = null

function calculateNodeStyling(node) {
  const nodeRef = (
    node.getAttribute('id') ||
    node.getAttribute('data-reactid') ||
    node.getAttribute('name')
  )

  const style = window.getComputedStyle(node)

  const boxSizing = (
    style.getPropertyValue('box-sizing') ||
    style.getPropertyValue('-moz-box-sizing') ||
    style.getPropertyValue('-webkit-box-sizing')
  )

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  )

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  )

  const sizingStyle = SIZING_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';')

  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing,
  }

  return nodeInfo
}

export default function calculateNodeHeight(
  uiTextNode,
  minRows,
  maxRows
) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    document.body.appendChild(hiddenTextarea)
  }

  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode)

  hiddenTextarea.setAttribute('style', `${sizingStyle}${HIDDEN_TEXTAREA_STYLE}`)
  hiddenTextarea.value = ''

  let minHeight = -Infinity
  let maxHeight = Infinity
  let overflowY = 'hidden'

  let partiallyComputedHeight = (
    boxSizing === 'border-box'
    ? hiddenTextarea.scrollHeight + borderSize
    : hiddenTextarea.scrollHeight - paddingSize
  )

  const baseSingleRowHeight = hiddenTextarea.scrollHeight - paddingSize

  const boxSizingHeight = (
    boxSizing === 'border-box'
    ? paddingSize + borderSize
    : 0
  )

  minHeight = (baseSingleRowHeight * minRows) + boxSizingHeight
  partiallyComputedHeight = Math.max(minHeight, partiallyComputedHeight)

  maxHeight = (baseSingleRowHeight * maxRows) + boxSizingHeight
  overflowY = partiallyComputedHeight > maxHeight ? '' : 'hidden'
  const height = Math.min(maxHeight, partiallyComputedHeight)

  return { height, minHeight, maxHeight, overflowY }
}