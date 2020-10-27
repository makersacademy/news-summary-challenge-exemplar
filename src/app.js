window.addEventListener("load", (event) => {
  let appElement = document.getElementById("app");
  new Headlines({element: appElement, client: GuardianClient()})

  window.addEventListener("hashchange", (event) => {
    let url = location.hash.split('summaries/')[1]
    appElement.innerHTML = ''
    new ArticleSummary({element: appElement, client: AylienClient(), url: url})
  });
})
