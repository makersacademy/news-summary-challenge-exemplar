class ArticleSummary {
  constructor(props) {
    this.props = props
    this.state = { text: '' }
    this.element = document.createElement("article")
    this.element.classList.add("article-summary");
    this.setStateAndRender = this.setStateAndRender.bind(this)
    this.getSummary()
  }

  getSummary() {
    let url = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${this.props.url}`
    this.props.client.get(url, this.setStateAndRender)
  }

  setStateAndRender(data) {
    this.setState({text: data})
    this.render()
  }

  setState(obj) {
    Object.keys(obj).forEach((prop) => {
      this.state[prop] = obj[prop]
    })
  }

  render() {
    this.props.element.appendChild(this.element)
    this.element.innerHTML = this.state.text
  }
}
