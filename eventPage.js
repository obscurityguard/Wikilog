
chrome.tabs.onActivated.addListener(function (tabInfo){
  chrome.tabs.get(tabInfo.tabId, function (tab){
    const wikipediaRegex = new RegExp("https:\/\/..\.wikipedia\.org\/wiki\/.+")
    if (wikipediaRegex.test(tab.url)){
      console.log(localStorage.getItem("urls"))
      if(localStorage.getItem("urls") == null){
        console.log("no urls")
        localStorage.setItem("urls", JSON.stringify([]))
      }
      let urls = JSON.parse(localStorage.getItem("urls"))
      console.log(urls)
      urls.push({url: tab.url, date: new Date()})
      localStorage.setItem("urls", JSON.stringify(urls))
    }


  })
})
