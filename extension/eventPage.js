
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
  console.log(changeInfo)
  if (changeInfo.status == "complete"){
    const wikipediaRegex = new RegExp("https:\/\/..\.wikipedia\.org\/wiki\/.+")
    if (wikipediaRegex.test(tab.url)){
      console.log(tab.url)
      if(localStorage.getItem("urls") == null){
        console.log("no urls")
        localStorage.setItem("urls", JSON.stringify([]))
      }
      let urls = JSON.parse(localStorage.getItem("urls"))
      console.log(urls)
      urls.push({url: tab.url, date: new Date()})
      localStorage.setItem("urls", JSON.stringify(urls))
    }


  }
})
