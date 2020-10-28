fdescribe('GuardianClient', () => {
  let client, callback, results, itemId, thumbnail;

  beforeEach(() => {
    client = GuardianClient()
    itemId = 'itemId'
    results = []
    thumbnail = "test.jpg"
  })

  describe('getThumbnail', () => {
    beforeEach(() => {
      let thumbnailData = { response: { content: { fields: { thumbnail: thumbnail }}}}
      let mockJsonPromise = Promise.resolve(thumbnailData)
      let mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      })

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)
    })
    it('calls fetch with url', () => {
      client.getThumbnail(itemId)

      expect(fetch).toHaveBeenCalledWith(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/${itemId}?show-fields=thumbnail`)
    })

    it('returns promise with thumbnail file path', () => {
      return client.getThumbnail(itemId)
        .then((res) => {
          expect(res).toEqual(thumbnail)
        })
    })
  })

  describe('getHeadlines', () => {
    beforeEach(() => {
      headlineData = { response: { results: [] }}
      let mockJsonPromise = Promise.resolve(headlineData)
      let mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      })

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)
    })

    it('calls fetch with url', () => {
      client.getHeadlines()

      expect(fetch).toHaveBeenCalledWith(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=coronavirus`)
    })

    it('returns promise with headlines data', () => {
      return client.getHeadlines()
        .then((res) => {
          expect(res).toEqual(results)
        })
    })
  })
})
