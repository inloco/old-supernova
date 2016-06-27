function hasWrapperClass(node, className) {
  it("has wrapper class", () => {
    expect(node.classList.contains(className)).toBeTruthy
  })
}

export default hasWrapperClass