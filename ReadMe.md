# Cookie Deleter [![Create Release ZIP](https://github.com/Jasmin25/cookie-deleter/actions/workflows/create-release-zip.yml/badge.svg)](https://github.com/Jasmin25/cookie-deleter/actions/workflows/create-release-zip.yml)

Cookie Deleter is a lightweight and user-friendly Chrome extension designed to help users manage and delete cookies for specific websites. It enables users to maintain a customizable list of domains for which cookies should be automatically deleted whenever they visit them. By offering an easy way to manage cookies on a domain-by-domain basis, this extension aims to enhance user privacy while browsing the internet.

## Features

- Maintain a list of domains for which cookies should be deleted
- Automatically delete cookies for specified domains upon visiting them
- Manually delete cookies for specified domains with a click of a button
- Save the list of domains for future browsing sessions

## Installation

There are two ways to install the Cookie Deleter extension:

### Method 1: Install from the release ZIP file
1. Go to the [Releases](https://github.com/Jasmin25/cookie-deleter/releases) page of the GitHub repository.
2. Download the CookieDeleter.zip file for the latest release.
3. Extract the contents of the CookieDeleter.zip file to a folder on your computer.
4. Open Google Chrome and go to `chrome://extensions/`.
5. Enable "Developer mode" by toggling the switch in the top-right corner.
6. Click the "Load unpacked" button and select the folder where you extracted the CookieDeleter.zip file.
7. The Cookie Deleter extension should now appear in the list of installed extensions.

### Method 2: Install using git clone
1. Clone the GitHub repository to your local machine:
    ```git clone https://github.com/Jasmin25/cookie-deleter.git```
2. Open Google Chrome and go to `chrome://extensions/`. 
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click the "Load unpacked" button and select the folder where you cloned the GitHub repository.
5. The Cookie Deleter extension should now appear in the list of installed extensions.

## Usage

1. Click on the Cookie Deleter icon in your browser's toolbar to open the extension's popup.
2. In the popup, enter the domains you'd like to manage in the textarea, one domain per line, without the "http://" or "https://" prefix. For example:
    ```
    example.com
    anotherdomain.net
    somedomain.org
    ```
3. Click the "Save Domains" button to store your list of domains. The extension will remember these domains and automatically delete cookies for them when you visit these sites.
4. If you want to delete cookies for the saved domains manually, click the "Delete Cookies" button in the popup. This will remove cookies for all the domains listed in the textarea.

### Updating the List of Domains

1. Click on the Cookie Deleter icon in your browser's toolbar to open the popup.
2. The textarea will display the list of previously saved domains. You can add or remove domains as needed.
3. Click the "Save Domains" button to save your updated list.

## Contributing

I welcome contributions to improve the Cookie Deleter extension. To contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork and create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Create a pull request to the original repository, providing a clear description of your changes.

Please ensure your code follows best practices and is well-documented.

## License

This project is released under the [MIT License](./LICENSE).
