// Listener for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Check if the request type is 'deleteCookies'
  if (request.type === 'deleteCookies') {
    const domains = request.domains;
    
    // Loop through each domain and get cookies
    for (const domain of domains) {
      chrome.cookies.getAll({ domain }, (cookies) => {
        // Loop through each cookie and remove it
        for (const cookie of cookies) {
          chrome.cookies.remove({ url: `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`, name: cookie.name });
        }
      });
    }
    // Send a response indicating success
    sendResponse({ success: true });
  }
});

// Function to delete cookies for given domains
function deleteCookiesForDomains(domains) {
  for (const domain of domains) {
    chrome.cookies.getAll({ domain }, (cookies) => {
      for (const cookie of cookies) {
        chrome.cookies.remove({ url: `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`, name: cookie.name });
      }
    });
  }
}

// Listener for when a tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab update status is 'complete'
  if (changeInfo.status === 'complete') {
    // Get the saved domains from local storage
    chrome.storage.local.get('domains', (data) => {
      if (data.domains) {
        const domains = data.domains.split('\n');
        // Delete cookies for the retrieved domains
        deleteCookiesForDomains(domains);
      }
    });
  }
});
