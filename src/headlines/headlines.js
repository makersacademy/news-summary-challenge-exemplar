class Headlines {
  constructor(props) {
    this.props = props
    this.state = { items: [] }
    this.element = document.createElement("UL")
    this.element.classList.add("headlines");
    this.setStateAndRender = this.setStateAndRender.bind(this)
    this.getHeadlines()
  }

  getHeadlines() {
    let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=coronavirus"
    this.props.client.get(url, this.setStateAndRender)
  }

  setStateAndRender(data) {
    this.setState({items: data})
    this.render()
  }

  setState(obj) {
    Object.keys(obj).forEach((prop) => {
      this.state[prop] = obj[prop]
    })
  }

  render() {
    this.props.element.appendChild(this.element)
    this.state.items.forEach(item => {
      let headline = new Headline({element: this.element, data: item})
      headline.render()
    })
  }
}
