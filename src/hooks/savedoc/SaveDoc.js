
const SaveDoc = (content, filename = 'document.md') => {
  try {
    // Validate input
    if (!content || typeof content !== 'string') {
      throw new Error('Content must be a non-empty string');
    }
    
    // Ensure filename ends with .md
    if (!filename.toLowerCase().endsWith('.md')) {
      filename += '.md';
    }
    
    // Create blob and download
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up after a delay to ensure download starts
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    return false;
  }
};

export default SaveDoc;


