const GuardianClient = () => {
  const get = (url, callback) => {
    return fetch(url)
      .then(response => response.json())
      .then(data => callback(data.response.results))
  }

  return {
    get: get
  }
}
