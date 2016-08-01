export const wizardHasContent = (content, wizardNode) => {
  const stepNode = wizardNode.querySelector(".sn-wizard-step")

  expect(stepNode.textContent).toEqual(content)
}