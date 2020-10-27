describe('Headlines', () => {
  let headlines, mockElement, mockClient, guardianUrl;

  beforeEach(() => {
    mockElement = document.createElement("div")
    mockClient = {
      get: () => null,
    }
    mockHeadlineData = {
      "id": "tv-and-radio/2020/jun/29/catchphrase-restarts-filming-after-coronavirus-lockdown-itv",
      "type": "article",
      "sectionId": "tv-and-radio",
      "sectionName": "Television & radio",
      "webPublicationDate": "2020-06-29T06:00:00Z",
      "webTitle": "Catchphrase restarts filming after coronavirus lockdown",
      "webUrl": "https://www.theguardian.com/tv-and-radio/2020/jun/29/catchphrase-restarts-filming-after-coronavirus-lockdown-itv",
      "apiUrl": "https://content.guardianapis.com/tv-and-radio/2020/jun/29/catchphrase-restarts-filming-after-coronavirus-lockdown-itv",
      "isHosted": false,
      "pillarId": "pillar/arts",
      "pillarName": "Arts"
    }
    spyOn(mockClient, "get")
    guardianUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=coronavirus"
    headlines = new Headlines({element: mockElement, client: mockClient})
  })

  describe('getHeadlines', () => {
    it('calls client get with callback', () => {
      headlines.getHeadlines()
      expect(mockClient.get).toHaveBeenCalledWith(guardianUrl, headlines.setStateAndRender)
    })
  })

  describe('setStateAndRender', () => {
    it('sets element inner html', () => {
      headlines.setStateAndRender([mockHeadlineData])
      expect(mockElement.innerHTML).toBe(`<ul class="headlines"><li class="headline"><a href="#/summaries/${mockHeadlineData.webUrl}">${mockHeadlineData.webTitle}</a></li></ul>`)
    })

    it('calls setState', () => {
      let state = {items: [mockHeadlineData]}
      spyOn(headlines, "setState")
      headlines.setStateAndRender([mockHeadlineData])
      expect(headlines.setState).toHaveBeenCalledWith(state)
    })

    it('calls render', () => {
      spyOn(headlines, "render")
      headlines.setStateAndRender([mockHeadlineData])
      expect(headlines.render).toHaveBeenCalled()
    })
  })

  describe('setState', () => {
    it('sets state object', () => {
      headlines.setState({test: 5})
      expect(headlines.state.test).toBe(5)
    })

    it('sets state object with multiple props', () => {
      let state = {
        a: 5,
        b: 6
      }
      headlines.setState(state)
      expect(headlines.state.a).toBe(5)
      expect(headlines.state.b).toBe(6)
    })
  })

  describe('render', () => {
    it('sets element html', () => {
      headlines.state.items = [mockHeadlineData]
      headlines.render()
      expect(mockElement.innerHTML).toBe(`<ul class="headlines"><li class="headline"><a href="#/summaries/${mockHeadlineData.webUrl}">${mockHeadlineData.webTitle}</a></li></ul>`)
    })
  })
})
