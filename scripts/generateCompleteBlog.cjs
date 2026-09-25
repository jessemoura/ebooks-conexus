const fs = require('fs');
const path = require('path');

// Helper to count words accurately
function countWords(html) {
  if (!html) return 0;
  const clean = html.replace(/<[^>]+>/g, ' ').replace(/[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]/g, ' ').replace(/\s+/g, ' ').trim();
  return clean ? clean.split(/\s+/).length : 0;
}

console.log('Master Blog Generator initialized...');
