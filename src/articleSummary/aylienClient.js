const AylienClient = () => {
  const get = (url, callback) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => callback(data.text))
  }

  return {
    get: get
  }
}
