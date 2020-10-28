describe('ArticleSummary', () => {
  let articleSummary, mockElement, mockGuardianClient, mockAylienClient, mockHeadlineData, mockImgUrl, mockSummaryText;

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

    mockImgUrl = "test.jpg"
    mockGuardianClient = {
      getThumbnail: () => {}
    }
    spyOn(mockGuardianClient, "getThumbnail")
      .and
      .callFake(() => Promise.resolve(mockImgUrl))

    mockSummaryText = "a really lovely story"
    mockAylienClient = {
      getSummary: () => {}
    }
    spyOn(mockAylienClient, "getSummary")
      .and
      .callFake(() => Promise.resolve(mockSummaryText))

    articleSummary = new ArticleSummary({element: mockElement, aylienClient: mockAylienClient, guardianClient: mockGuardianClient, item: mockHeadlineData})
  })

  describe('setupComponent', () => {
    it('calls client getThumbnail', () => {
      articleSummary.setupComponent()
      expect(mockAylienClient.getSummary).toHaveBeenCalledWith(mockHeadlineData.webUrl)
    })

    it('calls client getThumbnail', () => {
      articleSummary.setupComponent()
      expect(mockGuardianClient.getThumbnail).toHaveBeenCalledWith(mockHeadlineData.id)
    })

    it('calls setStateAndRender', () => {
      spyOn(articleSummary, "setStateAndRender")
      return Promise.resolve(articleSummary.setupComponent())
        .then(() => {
          expect(articleSummary.setStateAndRender).toHaveBeenCalledWith({text: mockSummaryText})
          expect(articleSummary.setStateAndRender).toHaveBeenCalledWith({thumbnail: mockImgUrl})
        })
    })
  })

  describe('render', () => {
    it('sets element html', () => {
      articleSummary.state.text = mockSummaryText
      articleSummary.state.thumbnail = "test.jpg"
      articleSummary.render()
      expect(mockElement.innerHTML).toEqual([
        `<article class="article-summary">`,
          `<img src="test.jpg">`,
          `<h3><a href="${mockHeadlineData.webUrl}">${mockHeadlineData.webTitle}</a></h3>`,
          `<p>${mockSummaryText}</p>`,
        `</article>`
      ].join(''))
    })
  })
})
