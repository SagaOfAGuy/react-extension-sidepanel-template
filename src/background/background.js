// Say hello when the extension is first installed in  
chrome.runtime.onInstalled.addListener(() => {
  console.log("Hello from background.js!")
}); 

// Enabled side panel to be visible
chrome.sidePanel.setOptions({
  path: 'sidepanel.html',
  enabled: true
})
chrome.sidePanel
      .setPanelBehavior({ openPanelOnActionClick: true })
      .catch((error) => console.error(error));

