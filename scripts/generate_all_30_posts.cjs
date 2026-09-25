// scripts/generate_all_30_posts.cjs - Full 30 Articles Generator with Depth >= 1100 words in PT/EN/ES
const fs = require('fs');
const path = require('path');

// Word counting function
function countWords(text) {
  if (!text) return 0;
  const clean = text.replace(/<[^>]+>/g, ' ').replace(/[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]/g, ' ').replace(/\s+/g, ' ').trim();
  return clean ? clean.split(/\s+/).length : 0;
}

console.log('Loading generators and building 30 deep articles...');
