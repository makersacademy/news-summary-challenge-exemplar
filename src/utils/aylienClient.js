const AylienClient = () => {
  const getSummary = (articleUrl) => {
    let url = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`

    return fetch(url)
      .then(response => response.json())
      .then((data) => data.text)
  }

  return {
    getSummary: getSummary
  }
}
