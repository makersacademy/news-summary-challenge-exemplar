describe('Headline', () => {
  let headline, mockElement;

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
    headline = new Headline({element: mockElement, data: mockHeadlineData})
  })

  describe('render', () => {
    it('sets element html', () => {
      headline.render()
      expect(mockElement.innerHTML).toBe(`<li class="headline"><a href="#/summaries/${mockHeadlineData.webUrl}">${mockHeadlineData.webTitle}</a></li>`)
    })
  })
})
