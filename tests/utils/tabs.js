export const isShowingContent = (content, expectedContent) => {
  const currentContent = content.text()
  const currentActiveProps = content.props().active

  expect(currentContent).toEqual(expectedContent)
  expect(currentActiveProps).toBeTruthy()
}

export const isActive = tab => {
  expect(tab.hasClass('is-active')).toBeTruthy()
}
