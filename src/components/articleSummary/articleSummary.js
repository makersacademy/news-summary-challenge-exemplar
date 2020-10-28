class ArticleSummary extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '', thumbnail: '' }
    this.element = document.createElement("article")
    this.element.classList.add("article-summary");
    this.setupComponent()
  }

  setupComponent() {
    this.props.aylienClient.getSummary(this.props.item.webUrl)
      .then(data => this.setStateAndRender({text: data}))

    this.props.guardianClient.getThumbnail(this.props.item.id)
      .then(data => this.setStateAndRender({thumbnail: data}))
  }

  render() {
    this.props.element.appendChild(this.element)
    this.element.innerHTML = [
      `<img src="${this.state.thumbnail}">`,
      `<h3><a href="${this.props.item.webUrl}">${this.props.item.webTitle}</a></h3>`,
      `<p>${this.state.text}</p>`
    ].join('')
  }
}
