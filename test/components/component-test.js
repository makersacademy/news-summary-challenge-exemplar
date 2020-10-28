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

    it('sets empty children prop', () => {
      expect(component.children).toEqual({})
    })

    it('sets children prop if given', () => {
      component = new Component({children: {child: 'child'}})
      expect(component.children).toEqual({child: 'child'})
    })

    it('sets empty state object', () => {
      expect(Object.keys(component.state).length).toEqual(0)
    })
  })

  describe('setStateAndRender', () => {
    it('calls setState', () => {
      spyOn(component, "render")
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

  describe('render', () => {
    it('throws error', () => {
      expect(component.render).toThrow(new Error("Please implement me in a subclass"))
    })
  })
})
