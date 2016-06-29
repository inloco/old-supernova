export function hasWrapperClass(node, className) {
  it("has wrapper class", () => {
    expect(node.classList.contains(className)).toBeTruthy
  })
}

export function hasWrapperId(node, id) {
  it("has wrapper id", () => {
    expect(node.id).toEqual(id)
  })
}