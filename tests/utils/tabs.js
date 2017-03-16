export const isShowingContent = (content, expectedContent) => {
  const currentContent = content.text()

  expect(currentContent).toEqual(expectedContent)
}

export const isActive = tab => {
  expect(tab.hasClass('is-active')).toBeTruthy()
}
