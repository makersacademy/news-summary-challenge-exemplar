window.addEventListener("load", (event) => {
  let appElement = document.getElementById("app");
  let headlines = new Headlines({element: appElement, client: GuardianClient()})

  window.addEventListener("hashchange", (event) => {
    appElement.innerHTML = ''
    let id = location.hash.split('summaries/')[1]
    let item = headlines.findBy(id)
    new ArticleSummary({element: appElement, aylienClient: AylienClient(), guardianClient: GuardianClient(), item: item})
  });
})
