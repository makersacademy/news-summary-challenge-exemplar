describe('Component', () => {
  let component, state;

  beforeEach(() => {
    component = new Component({test: 'test'})
    state = {test: 5}
  })

  describe('initialisation', () => {
    it('sets props', () => {
      expect(component.props.test).toEqual('test')
    })

    it('sets empty state object', () => {
      expect(Object.keys(component.state)).toEqual(0)
    })
  })

  describe('setStateAndRender', () => {
    it('calls setState', () => {
      spyOn(component, "setState")
      component.setStateAndRender(state)
      expect(component.setState).toHaveBeenCalledWith(state)
    })

    it('calls render', () => {
      spyOn(component, "render")
      component.setStateAndRender(state)
      expect(component.render).toHaveBeenCalled()
    })
  })

  describe('setState', () => {
    it('sets state object', () => {
      component.setState({test: 5})
      expect(component.state.test).toBe(5)
    })

    it('sets state object with multiple props', () => {
      let state = {
        a: 5,
        b: 6
      }
      component.setState(state)
      expect(component.state.a).toBe(5)
      expect(component.state.b).toBe(6)
    })
  })
})
