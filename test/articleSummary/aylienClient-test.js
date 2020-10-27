describe('AylienClient', () => {
  let client, callback, results;

  beforeEach(() => {
    client = AylienClient()
    callback = jasmine.createSpy("callback")
    let data = { text: 'a summary' }
    text = data.text
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
          expect(callback).toHaveBeenCalledWith(text)
        })
    })
  })
})
