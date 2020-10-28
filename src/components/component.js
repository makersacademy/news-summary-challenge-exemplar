class Component {
  constructor(props) {
    this.props = props
    this.state = {}
  }

  setStateAndRender(obj) {
    this.setState(obj)
    this.render()
  }

  setState(obj) {
    Object.keys(obj).forEach(prop => this.state[prop] = obj[prop])
  }
}
