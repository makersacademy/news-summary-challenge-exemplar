class Headlines extends Component {
  constructor(props) {
    super(props)
    this.children.Headline = this.children.Headline || Headline
    this.state = { items: [] }
    this.element = document.createElement("UL")
    this.element.classList.add("headlines");
    this.setupComponent()
  }

  setupComponent() {
    return this.props.client.getHeadlines()
      .then((data) => this.setStateAndRender({items: data}))
  }

  findBy(id) {
    return this.state.items.filter((item) => {
      if (item.id === id) { return item }
    })[0]
  }

  render() {
    this.props.element.appendChild(this.element)
    this.state.items.forEach(item => new this.children.Headline({element: this.element, client: GuardianClient(), data: item}))
  }
}
