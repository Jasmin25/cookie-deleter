document.getElementById('deleteCookies').addEventListener('click', () => {
  const domainsText = document.getElementById('domains').value;
  const domains = domainsText.split('\n');
  chrome.runtime.sendMessage({ action: 'deleteCookies', domains });

  // Provide UI feedback
  const deleteButton = document.getElementById('deleteCookies');
  deleteButton.textContent = 'Deleted';
  deleteButton.classList.remove('bg-red-500', 'hover:bg-red-600');
  deleteButton.classList.add('bg-green-500', 'hover:bg-green-600');

  setTimeout(() => {
    deleteButton.textContent = 'Delete Cookies';
    deleteButton.classList.remove('bg-green-500', 'hover:bg-green-600');
    deleteButton.classList.add('bg-red-500', 'hover:bg-red-600');
  }, 1000);
});

document.getElementById('saveDomains').addEventListener('click', () => {
  const domainsText = document.getElementById('domains').value;
  chrome.storage.local.set({ domains: domainsText }, () => {
    // Provide UI feedback
    const saveButton = document.getElementById('saveDomains');
    saveButton.textContent = 'Saved';
    saveButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
    saveButton.classList.add('bg-green-500', 'hover:bg-green-600');

    setTimeout(() => {
      saveButton.textContent = 'Save Domains';
      saveButton.classList.remove('bg-green-500', 'hover:bg-green-600');
      saveButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
    }, 1000);
  });
});

chrome.storage.local.get('domains', (data) => {
  if (data.domains) {
    document.getElementById('domains').value = data.domains;
  }
});
