class Headline extends Component {
  constructor(props) {
    super(props)
    this.state = { thumbnail: '' }
    this.element = document.createElement("LI")
    this.element.classList.add("headline");
    this.setupComponent()
  }

  setupComponent() {
    this.props.client.getThumbnail(this.props.data.id)
      .then(data => this.setStateAndRender({thumbnail: data}))
  }

  render() {
    this.props.element.appendChild(this.element)
    this.element.innerHTML = [
      `<img src="${this.state.thumbnail}">`,
      `<a href="#/summaries/${this.props.data.id}">${this.props.data.webTitle}</a>`
    ].join('')
  }
}
