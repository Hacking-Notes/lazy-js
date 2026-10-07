<a name="top"></a>

<div align="center">

<img src="assets/header.svg" alt="Lazy-JS" width="100%" />

<br />

<a href="https://github.com/Hacking-Notes/lazy-js/stargazers"><img src="https://img.shields.io/github/stars/Hacking-Notes/lazy-js?style=for-the-badge&logo=github&logoColor=1f2328&label=Stars&labelColor=f6f8fa&color=059669" alt="Stars" /></a>
<a href="https://github.com/Hacking-Notes/lazy-js/network/members"><img src="https://img.shields.io/github/forks/Hacking-Notes/lazy-js?style=for-the-badge&logo=git&logoColor=1f2328&label=Forks&labelColor=f6f8fa&color=0284c7" alt="Forks" /></a>
<a href="https://github.com/Hacking-Notes/lazy-js/commits"><img src="https://img.shields.io/github/last-commit/Hacking-Notes/lazy-js?style=for-the-badge&label=Updated&labelColor=f6f8fa&color=7c3aed" alt="Last commit" /></a>
<a href="LICENSE"><img src="https://img.shields.io/github/license/Hacking-Notes/lazy-js?style=for-the-badge&label=License&labelColor=f6f8fa&color=0891b2" alt="License" /></a>
<a href="https://hacking-notes.com"><img src="https://img.shields.io/badge/More-hacking--notes.com-db2777?style=for-the-badge&labelColor=f6f8fa" alt="hacking-notes.com" /></a>

</div>

<br />

A Chrome extension that helps extract and identify lazy-loaded file names from scripts. This tool is particularly useful for developers who need to analyze and understand the structure of dynamically loaded JavaScript files in web applications.

![image](https://github.com/user-attachments/assets/54fc9d3f-1861-4125-8ffe-880e84414921)

## Features

- Extract module map information from scripts
- Generate filenames from module maps
- Copy results to clipboard with one click
- Modern, dark-themed user interface
- Easy-to-use popup interface


<img src="assets/divider.svg" width="100%" alt="" />

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files


<img src="assets/divider.svg" width="100%" alt="" />

## Usage

1. Click the extension icon in your Chrome toolbar
2. Paste the script containing module map information into the input field
3. Click the "Execute" button to process the script
4. View the generated list of filenames
5. Use the "Copy" button to copy the results to your clipboard


<img src="assets/divider.svg" width="100%" alt="" />

## Project Structure

```
├── icons/              # Extension icons in various sizes
├── manifest.json       # Extension configuration file
├── icon.svg           # SVG source for the extension icon
├── popup.html         # Extension popup interface
└── popup.js           # Extension functionality
```


<img src="assets/divider.svg" width="100%" alt="" />

## Development

The extension is built using vanilla JavaScript and follows Chrome Extension Manifest V3 specifications. The UI is styled with modern CSS variables for easy theming and maintenance.


<img src="assets/divider.svg" width="100%" alt="" />

## Permissions

- `clipboardWrite`: Required for copying results to the clipboard


<img src="assets/divider.svg" width="100%" alt="" />

## License

This project is open source and available under the MIT License.


<img src="assets/divider.svg" width="100%" alt="" />

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<img src="assets/divider.svg" width="100%" alt="" />

## 🧰 Hacking Notes Ecosystem

<div align="center">

🌐 &nbsp;**[hacking-notes.com](https://hacking-notes.com)** &nbsp;·&nbsp; ✍️ &nbsp;**[blog](https://hacking-notes.medium.com/)** &nbsp;·&nbsp; 💬 &nbsp;**[discord](https://discord.gg/r68ameNHrD)**

</div>

| | Resource | What you get |
| :-: | -------- | ------------ |
| 🗺 | **[Hacker-Roadmap](https://github.com/Hacking-Notes/Hacker-Roadmap)** | Structured paths from beginner to pro — hobbyist, bug bounty, certs & degree. |
| 🔴 | **[RedTeam Notes](https://github.com/Hacking-Notes/RedTeam)** | Offensive security notes: recon, exploitation, Windows & Linux. |
| 🔷 | **[BlueTeam Notes](https://github.com/Hacking-Notes/BlueTeam)** | Defensive security notes: forensics, malware, log & packet analysis. |
| 🧩 | **[Extensions](https://github.com/Hacking-Notes/Extensions)** | Curated Chrome extensions for ethical hacking & recon. |
| 🔖 | **[Bookmarks](https://github.com/Hacking-Notes/Bookmarks)** | Curated hacker bookmark collection, one import away. |

<img src="assets/footer.svg" width="100%" alt="" />

<div align="right"><a href="#top">⬆ back to top</a></div>
