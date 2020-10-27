class Headline {
  constructor(props) {
    this.props = props
    this.element = document.createElement("LI")
    this.element.classList.add("headline");
  }

  render() {
    this.props.element.appendChild(this.element)
    this.element.innerHTML = `<a href="${this.props.data.webUrl}">${this.props.data.webTitle}</a>`
  }
}
