class Component {
  constructor(props) {
    this.props = props
    this.children = props.children || {}
    this.state = {}
  }

  setStateAndRender(obj) {
    this.setState(obj)
    this.render()
  }

  setState(obj) {
    Object.keys(obj).forEach(prop => this.state[prop] = obj[prop])
  }

  render() {
    throw new Error("Please implement me in a subclass")
  }
}
