
chrome.tabs.onActivated.addListener(function (tabInfo){
  chrome.tabs.get(tabInfo.tabId, function (tab){
    console.log(tab)
  })
})
