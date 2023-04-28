// Add click event listener for the "Delete Cookies" button
document.getElementById('deleteCookies').addEventListener('click', () => {
  // Get the domain list from the textarea
  const domainsText = document.getElementById('domains').value;
  // Split the domain list into an array
  const domains = domainsText.split('\n');
  // Send a message to background.js to delete cookies for the given domains
  chrome.runtime.sendMessage({ action: 'deleteCookies', domains });

  // Provide UI feedback
  // Update the "Delete Cookies" button text and style to indicate cookies have been deleted
  const deleteButton = document.getElementById('deleteCookies');
  deleteButton.textContent = 'Deleted';
  deleteButton.classList.remove('bg-red-500', 'hover:bg-red-600');
  deleteButton.classList.add('bg-green-500', 'hover:bg-green-600');

  // Revert the "Delete Cookies" button to its original state after 1 second
  setTimeout(() => {
    deleteButton.textContent = 'Delete Cookies';
    deleteButton.classList.remove('bg-green-500', 'hover:bg-green-600');
    deleteButton.classList.add('bg-red-500', 'hover:bg-red-600');
  }, 1000);
});

// Add click event listener for the "Save Domains" button
document.getElementById('saveDomains').addEventListener('click', () => {
  // Get the domain list from the textarea
  const domainsText = document.getElementById('domains').value;
  // Save the domain list to local storage
  chrome.storage.local.set({ domains: domainsText }, () => {
    // Provide UI feedback
    // Update the "Save Domains" button text and style to indicate the domains have been saved
    const saveButton = document.getElementById('saveDomains');
    saveButton.textContent = 'Saved';
    saveButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
    saveButton.classList.add('bg-green-500', 'hover:bg-green-600');

    // Revert the "Save Domains" button to its original state after 1 second
    setTimeout(() => {
      saveButton.textContent = 'Save Domains';
      saveButton.classList.remove('bg-green-500', 'hover:bg-green-600');
      saveButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
    }, 1000);
  });
});

// Retrieve the saved domain list from local storage and populate the textarea
chrome.storage.local.get('domains', (data) => {
  if (data.domains) {
    document.getElementById('domains').value = data.domains;
  }
});
