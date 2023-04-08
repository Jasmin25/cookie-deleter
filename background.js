chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'deleteCookies') {
    const domains = request.domains;
    for (const domain of domains) {
      chrome.cookies.getAll({ domain }, (cookies) => {
        for (const cookie of cookies) {
          chrome.cookies.remove({ url: `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`, name: cookie.name });
        }
      });
    }
    sendResponse({ success: true });
  }
});

function deleteCookiesForDomains(domains) {
  for (const domain of domains) {
    chrome.cookies.getAll({ domain }, (cookies) => {
      for (const cookie of cookies) {
        chrome.cookies.remove({ url: `http${cookie.secure ? 's' : ''}://${cookie.domain}${cookie.path}`, name: cookie.name });
      }
    });
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.storage.local.get('domains', (data) => {
      if (data.domains) {
        const domains = data.domains.split('\n');
        deleteCookiesForDomains(domains);
      }
    });
  }
});
