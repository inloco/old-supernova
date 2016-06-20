import React from "react"

export function bindItems(children, sidebar) {
  return children.map((child, index) => {
    return React.cloneElement(child, {
      key: index,
      handleClick: sidebar.handleClick.bind(sidebar),
      active: sidebar.state.currentPath === child.props.href,
      sidebar: sidebar
    })
  })
}
