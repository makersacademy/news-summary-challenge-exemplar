describe('AylienClient', () => {
  let client, callback, results, data;

  beforeEach(() => {
    client = AylienClient()
    data = { text: 'a summary' }
    let mockJsonPromise = Promise.resolve(data)
    let mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    })

    spyOn(window, "fetch")
      .and
      .callFake(() => mockFetchPromise)
  })

  describe('getSummary', () => {
    it('calls fetch with url', () => {
      client.getSummary('articleUrl')

      expect(fetch).toHaveBeenCalledWith(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=articleUrl`)
    })

    it('calls callback with data', () => {
      return client.getSummary('articleUrl')
        .then((res) => {
          expect(res).toEqual(data.text)
        })
    })
  })
})
