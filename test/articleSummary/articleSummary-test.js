describe('ArticleSummary', () => {
  let articleSummary, mockElement, mockClient, aylienUrl, summaryUrl;

  beforeEach(() => {
    mockElement = document.createElement("div")
    mockClient = {
      get: () => null,
    }
    mockSummaryText = "a really lovely story"
    spyOn(mockClient, "get")
    summaryUrl = "https://www.theguardian.com/world/2020/sep/09/coronavirus-testing-the-pm-fact-checked"
    aylienUrl = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${summaryUrl}`
    articleSummary = new ArticleSummary({element: mockElement, client: mockClient, url: summaryUrl})
  })

  describe('getSummary', () => {
    it('calls client get with callback', () => {
      articleSummary.getSummary()
      expect(mockClient.get).toHaveBeenCalledWith(aylienUrl, articleSummary.setStateAndRender)
    })
  })

  describe('setStateAndRender', () => {
    it('sets element inner html', () => {
      articleSummary.setStateAndRender(mockSummaryText)
      expect(mockElement.innerHTML).toBe(`<article class="article-summary">${mockSummaryText}</article>`)
    })

    it('calls setState', () => {
      let state = {text: mockSummaryText}
      spyOn(articleSummary, "setState")
      articleSummary.setStateAndRender(mockSummaryText)
      expect(articleSummary.setState).toHaveBeenCalledWith(state)
    })

    it('calls render', () => {
      spyOn(articleSummary, "render")
      articleSummary.setStateAndRender(mockSummaryText)
      expect(articleSummary.render).toHaveBeenCalled()
    })
  })

  describe('setState', () => {
    it('sets state object', () => {
      articleSummary.setState({test: 5})
      expect(articleSummary.state.test).toBe(5)
    })

    it('sets state object with multiple props', () => {
      let state = {
        a: 5,
        b: 6
      }
      articleSummary.setState(state)
      expect(articleSummary.state.a).toBe(5)
      expect(articleSummary.state.b).toBe(6)
    })
  })

  describe('render', () => {
    it('sets element html', () => {
      articleSummary.state.text = mockSummaryText
      articleSummary.render()
      expect(mockElement.innerHTML).toBe(`<article class="article-summary">${mockSummaryText}</article>`)
    })
  })
})
