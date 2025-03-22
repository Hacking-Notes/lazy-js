document.addEventListener('DOMContentLoaded', function() {
  const scriptInput = document.getElementById('scriptInput');
  const executeBtn = document.getElementById('executeBtn');
  const resultDiv = document.getElementById('result');

  executeBtn.addEventListener('click', function() {
    const script = scriptInput.value.trim();
    if (!script) {
      resultDiv.innerHTML = '<div class="error">Please paste a script first.</div>';
      return;
    }

    try {
      const moduleMap = extractModuleMap(script);
      const filenames = generateFilenames(moduleMap);
      
      // Create header with copy button
      const headerHtml = `
        <div class="header-with-copy">
          <span>Generated JavaScript Files (${filenames.length} files):</span>
          <button class="copy-button" id="copyButton">
            <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" />
              <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" />
            </svg>
            Copy
          </button>
        </div>
      `;

      // Create file list
      const fileListHtml = filenames.map(filename => 
        `<div class="file-item">${filename}</div>`
      ).join('');

      // Combine header and file list
      resultDiv.innerHTML = headerHtml + fileListHtml;

      // Add copy functionality
      const copyButton = document.getElementById('copyButton');
      copyButton.addEventListener('click', function() {
        const textToCopy = filenames.join('\n');
        navigator.clipboard.writeText(textToCopy).then(() => {
          copyButton.classList.add('copy-success');
          copyButton.innerHTML = `
            <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Copied!
          `;
          setTimeout(() => {
            copyButton.classList.remove('copy-success');
            copyButton.innerHTML = `
              <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" />
                <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" />
              </svg>
              Copy
            `;
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
          resultDiv.innerHTML = '<div class="error">Failed to copy to clipboard.</div>';
        });
      });

    } catch (error) {
      resultDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
  });
});

function extractModuleMap(script) {
  // Extract the module map from the script
  const moduleMapMatch = script.match(/\{[\s\S]*\}/);
  if (!moduleMapMatch) {
    throw new Error('Invalid script format. Please provide a valid module map.');
  }

  // Clean up the module map string to ensure it's valid JSON
  const moduleMapStr = moduleMapMatch[0]
    .replace(/(\d+):/g, '"$1":') // Add quotes around numeric keys
    .replace(/'/g, '"'); // Replace single quotes with double quotes
  
  // Parse the module map
  return JSON.parse(moduleMapStr);
}

function generateFilenames(moduleMap) {
  // Generate filenames from the module map
  return Object.entries(moduleMap).map(([id, hash]) => {
    return `${id === "76" ? "common" : id}.${hash}.js`;
  });
}

// ... rest of existing code ... 