describe('GuardianClient', () => {
  let client, callback, results;

  beforeEach(() => {
    client = GuardianClient()
    callback = jasmine.createSpy("callback")
    let data = { response: { results: [] }}
    results = data.response.results
    let mockJsonPromise = Promise.resolve(data)
    let mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    })

    spyOn(window, "fetch")
      .and
      .callFake(() => mockFetchPromise)
  })

  describe('get', () => {
    it('calls fetch with url', () => {
      client.get('a url', callback)

      expect(fetch).toHaveBeenCalledWith('a url')
    })

    it('calls callback with data', () => {
      return client.get('a url', callback)
        .then(() => {
          expect(callback).toHaveBeenCalledWith(results)
        })
    })
  })
})
