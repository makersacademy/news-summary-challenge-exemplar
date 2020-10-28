describe('Headline', () => {
  let headline, mockElement, mockClient, mockImgUrl;

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
    mockImgUrl = "#"
    mockClient = {
      getThumbnail: () => {}
    }
    spyOn(mockClient, "getThumbnail")
      .and
      .callFake(() => Promise.resolve(mockImgUrl))
    headline = new Headline({element: mockElement, client: mockClient, data: mockHeadlineData})
  })

  describe('setupComponent', () => {
    it('calls client getThumbnail', () => {
      headline.setupComponent()
      expect(mockClient.getThumbnail).toHaveBeenCalledWith(mockHeadlineData.id)
    })

    it('calls setStateAndRender', () => {
      spyOn(headline, "setStateAndRender")
      return headline.setupComponent()
        .then(() => {
          expect(headline.setStateAndRender).toHaveBeenCalledWith({thumbnail: mockImgUrl})
        })
    })
  })

  describe('render', () => {
    it('sets element html', () => {
      headline.render()
      expect(mockElement.innerHTML).toEqual([
        `<li class="headline">`,
          `<img src="">`,
          `<a href="#/summaries/${mockHeadlineData.id}">${mockHeadlineData.webTitle}</a>`,
        `</li>`
      ].join(''))
    })
  })
})
