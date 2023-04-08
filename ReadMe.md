# Cookie Deleter

Cookie Deleter is a lightweight and user-friendly Chrome extension designed to help users manage and delete cookies for specific websites. It enables users to maintain a customizable list of domains for which cookies should be automatically deleted whenever they visit them. By offering an easy way to manage cookies on a domain-by-domain basis, this extension aims to enhance user privacy while browsing the internet.

## Features

- Maintain a list of domains for which cookies should be deleted
- Automatically delete cookies for specified domains upon visiting them
- Manually delete cookies for specified domains with a click of a button
- Save the list of domains for future browsing sessions

## Installation

1. Clone the repository or download the source code:
```git clone https://github.com/yourusername/cookie-deleter.git ```
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner of the page.
4. Click the "Load unpacked" button and select the `cookie-deleter` folder where you cloned or downloaded the source code.
5. The Cookie Deleter extension is now installed and ready to use.

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
