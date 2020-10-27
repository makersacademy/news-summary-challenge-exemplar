window.addEventListener("load", (event) => {
  let headlinesDiv = document.getElementById("headlines");

  let headlines = new Headlines({element: headlinesDiv, client: GuardianClient()})
  headlines.render()
})
