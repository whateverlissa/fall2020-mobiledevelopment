// Component is the parent
class Component {
  constructor (title,author,text) {
    this.props = title
    this.props= author
    thie.props= text;
  }

  render () {
    // Child objects define their own render() methods

    <Article>
    <Title>this.props.title</Title>
    <Author>this.props.author</Author>
    <Text>this.props.text</Text>
  </Article>
  }
}

module.exports = {component};