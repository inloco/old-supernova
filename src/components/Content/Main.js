import React from 'react'

class Content extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main className="sn-layout__content">
        {this.props.children}
      </main>
    )
  }
}

export default Content
