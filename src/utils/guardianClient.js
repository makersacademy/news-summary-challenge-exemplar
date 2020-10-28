const GuardianClient = () => {
  const mainUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com"

  const getThumbnail = (id) => {
    let url =  `${mainUrl}/${id}?show-fields=thumbnail`
    return fetch(url)
      .then(response => response.json())
      .then(data => data.response.content.fields.thumbnail)
  }

  const getHeadlines = () => {
    let url = `${mainUrl}/search?q=coronavirus`
    return fetch(url)
      .then(response => response.json())
      .then(data => data.response.results)
  }

  return {
    getThumbnail: getThumbnail,
    getHeadlines: getHeadlines
  }
}
