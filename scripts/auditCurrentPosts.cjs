const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const code = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'blogPosts.ts'), 'utf8');
const result = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });

const m = { exports: {} };
const fn = new Function('module', 'exports', result.outputText);
fn(m, m.exports);

const data = m.exports.blogPostsData;

function getWordCount(text) {
  if (!text) return 0;
  const clean = text.replace(/<[^>]+>/g, ' ').replace(/[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]/g, ' ').replace(/\s+/g, ' ').trim();
  return clean ? clean.split(/\s+/).length : 0;
}

console.log('--- AUDITORIA DE PALAVRAS — 3 POSTS ATUAIS ---');
const pt = data.pt || [];
const en = data.en || [];
const es = data.es || [];

pt.forEach((p, idx) => {
  const pEn = en[idx] || {};
  const pEs = es[idx] || {};
  const wcPt = getWordCount(p.content);
  const wcEn = getWordCount(pEn.content);
  const wcEs = getWordCount(pEs.content);
  console.log(`Artigo ${idx + 1}: ${p.slug}`);
  console.log(`  PT: ${wcPt} palavras | EN: ${wcEn} palavras | ES: ${wcEs} palavras`);
  console.log(`  Status: ${wcPt >= 1000 && wcEn >= 1000 && wcEs >= 1000 ? 'APROVADO' : 'REPROVADO (< 1.000)'}`);
});
