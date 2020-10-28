fdescribe('Headlines', () => {
  Headline = class {
      constructor(props) {
        props.element.innerText = "mock-headline"
      }
  }
  let headlines, mockElement, mockClient, guardianUrl;

  beforeEach(() => {
    mockElement = document.createElement("div")
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
    mockClient = {
      getHeadlines: () => {}
    }
    spyOn(mockClient, "getHeadlines")
      .and
      .callFake(() => Promise.resolve([mockHeadlineData]))
    headlines = new Headlines({element: mockElement, client: mockClient})
  })

  describe('setupComponent', () => {
    it('calls client getHeadlines', () => {
      headlines.setupComponent()
      expect(mockClient.getHeadlines).toHaveBeenCalled()
    })

    it('calls setStateAndRender', () => {
      spyOn(headlines, "setStateAndRender")
      return headlines.setupComponent()
        .then(() => {
          expect(headlines.setStateAndRender).toHaveBeenCalledWith({items: [mockHeadlineData]})
        })
    })
  })

  describe('render', () => {
    it('sets element html', () => {
      headlines.state.items = [mockHeadlineData]
      headlines.render()
      expect(mockElement.innerHTML).toBe(`<ul class="headlines">mock-headline</ul>`)
    })
  })

  describe('findBy', () => {
    it('returns item data if present', () => {
      headlines.state.items = [mockHeadlineData]
      expect(headlines.findBy(mockHeadlineData.id)).toEqual(mockHeadlineData)
    })

    it('returns undefined if not present', () => {
      headlines.state.items = []
      expect(headlines.findBy(mockHeadlineData.id)).toEqual(undefined)
    })
  })
})
