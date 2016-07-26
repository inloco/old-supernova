export const isShowingContent = (node, expectedContent) => {
  const content = node.querySelector(".sn-tabs-content").textContent

  expect(content).toEqual(expectedContent)
}

export const isActive = tab => {
  expect(tab.classList.contains("is-active")).toBeTruthy()
}