document.getElementById('deleteCookies').addEventListener('click', () => {
  const domainsText = document.getElementById('domains').value;
  const domains = domainsText.split('\n');
  chrome.runtime.sendMessage({ action: 'deleteCookies', domains });
});

document.getElementById('saveDomains').addEventListener('click', () => {
  const domainsText = document.getElementById('domains').value;
  chrome.storage.local.set({ domains: domainsText }, () => {
    alert('Domains saved successfully!');
  });
});

chrome.storage.local.get('domains', (data) => {
  if (data.domains) {
    document.getElementById('domains').value = data.domains;
  }
});
