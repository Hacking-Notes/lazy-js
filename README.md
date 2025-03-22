![icon16](https://github.com/user-attachments/assets/f4b7476b-b9c9-4afe-8f60-a557e76ec04f)
# Lazy Loaded Files Extractor

A Chrome extension that helps extract and identify lazy-loaded file names from scripts. This tool is particularly useful for developers who need to analyze and understand the structure of dynamically loaded JavaScript files in web applications.

## Features

- Extract module map information from scripts
- Generate filenames from module maps
- Copy results to clipboard with one click
- Modern, dark-themed user interface
- Easy-to-use popup interface

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## Usage

1. Click the extension icon in your Chrome toolbar
2. Paste the script containing module map information into the input field
3. Click the "Execute" button to process the script
4. View the generated list of filenames
5. Use the "Copy" button to copy the results to your clipboard

## Project Structure

```
├── icons/              # Extension icons in various sizes
├── manifest.json       # Extension configuration file
├── icon.svg           # SVG source for the extension icon
├── popup.html         # Extension popup interface
└── popup.js           # Extension functionality
```

## Development

The extension is built using vanilla JavaScript and follows Chrome Extension Manifest V3 specifications. The UI is styled with modern CSS variables for easy theming and maintenance.

## Permissions

- `clipboardWrite`: Required for copying results to the clipboard

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
