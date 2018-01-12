const drawerIsCollapsed = context => {
  let isCollapsed = context.drawerIsCollapsed

  if(context.drawerIsOpened) {
    isCollapsed = false
  }

  return isCollapsed
}

export default drawerIsCollapsed