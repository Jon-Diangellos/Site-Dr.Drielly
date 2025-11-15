/* posts.js
   Responsável por carregar posts.json e expor uma função útil: fetchPosts()
   Para evitar multiplas requisições, usamos cache simples.
*/

let _cachedPosts = null;

/**
 * Busca posts do arquivo posts.json
 * @returns {Promise<Array>} array de posts
 */
async function fetchPosts() {
  if (_cachedPosts) return _cachedPosts;
  const res = await fetch('posts.json', { cache: "no-store" });
  if (!res.ok) throw new Error('Falha ao carregar posts.json: ' + res.status);
  const data = await res.json();
  _cachedPosts = data;
  return data;
}
