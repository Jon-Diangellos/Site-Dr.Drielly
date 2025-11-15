/* main.js
   Renderiza a lista de posts na página inicial e popula as tags e pequenos comportamentos.
*/

document.addEventListener('DOMContentLoaded', async () => {
  // ano no rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();

  // se estamos na página principal, renderiza posts
  const postsListEl = document.getElementById('posts-list');
  const tagListEl = document.getElementById('tag-list');

  try {
    const posts = await fetchPosts();

    // Renderiza cards
    if (postsListEl) {
      postsListEl.innerHTML = posts.map(postCardHtml).join('');
      // adiciona listeners de clique para navegar para post.html?id=...
      posts.forEach(p => {
        const btn = document.querySelector(`[data-post-id="${p.id}"]`);
        if (btn) {
          btn.addEventListener('click', () => {
            // navega para a página do post por id ou slug
            const target = `post.html?id=${encodeURIComponent(p.id)}`;
            window.location.href = target;
          });
        }
      });
    }

    // Renderiza tags únicas no sidebar
    if (tagListEl) {
      const allTags = Array.from(new Set(posts.flatMap(p => p.tags || [])));
      tagListEl.innerHTML = allTags.map(t => `<a href="#" class="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200">${t}</a>`).join('');
    }

    // Pequena interação: formulário de contato (simulação)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada (simulação). Obrigado!');
        contactForm.reset();
      });
    }

    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
      subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inscrição simulada. Obrigado!');
        subscribeForm.reset();
      });
    }

  } catch (err) {
    console.error('Erro ao carregar posts:', err);
    if (postsListEl) postsListEl.innerHTML = '<p class="text-red-500">Não foi possível carregar os posts.</p>';
  }
});

/**
 * Gera o HTML de um card de post.
 * Usamos content curto (excerpt) criado a partir do conteúdo se necessário.
 */
function postCardHtml(post) {
  const excerpt = makeExcerpt(post.content, 160);
  return `
    <article class="bg-white rounded-lg shadow p-4 flex gap-4 items-start">
      <div class="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center text-green-700 font-bold">${(post.title || '').slice(0,1)}</div>
      <div class="flex-1">
        <h4 class="text-lg font-semibold mb-1">${escapeHtml(post.title)}</h4>
        <div class="text-xs text-gray-500 mb-2">Por ${escapeHtml(post.author)} • ${escapeHtml(post.date)}</div>
        <p class="text-gray-600 mb-3">${escapeHtml(excerpt)}</p>
        <div class="flex gap-2 items-center">
          <button data-post-id="${post.id}" class="text-sm bg-green-600 text-white px-3 py-1 rounded">Ler</button>
          <div class="text-sm text-gray-500">${(post.tags || []).map(t => `<span class="inline-block bg-gray-100 px-2 py-1 rounded">${escapeHtml(t)}</span>`).join(' ')}</div>
        </div>
      </div>
    </article>
  `;
}

function makeExcerpt(htmlString, maxLength = 160) {
  // Remove tags simples e trunca
  const tmp = htmlString.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (tmp.length <= maxLength) return tmp;
  return tmp.slice(0, maxLength).trim() + '...';
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
