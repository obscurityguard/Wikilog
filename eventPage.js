
chrome.tabs.onActivated.addListener(function (tabInfo){
  chrome.tabs.get(tabInfo.tabId, function (tab){
    console.log(tab)
    const wikipediaRegex = new RegExp("https:\/\/..\.wikipedia\.org\/wiki\/.+")
    let match = wikipediaRegex.test(tab.url)
    console.log(match)
  })
})
