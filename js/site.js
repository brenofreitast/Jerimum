
// Cria o cartaz do filme ou série utilizando a imagem cadastrada no catálogo.
function criarPoster(item) {
  const prefix = location.pathname.includes("/categorias/") ? "../" : "";
  return `<div class="poster ${item.poster}">
   <img src="${prefix}imagens/${item.imagem}"
        alt="Cartaz de ${item.title}"
        onerror="this.style.display='none'; this.parentElement.classList.add('sem-imagem');">
   <span class="poster-fallback">${item.emoji}<br>${item.title}</span>
 </div>`;
}
// Monta os cards com a imagem, nome, ano, categoria e sinopse resumida de cada título.
function itemCard(item) {
  const prefix = location.pathname.includes("/categorias/") ? "../" : "";
  return `<article class="media-row">
   <a href="${prefix}detalhe.html?id=${item.id}" aria-label="Ver detalhes de ${item.title}">${criarPoster(item)}</a>
   <div class="media-info"><div class="meta">${item.type} • ${item.year} • ${item.category}</div>
   <h2><a href="${prefix}detalhe.html?id=${item.id}">${item.title}</a></h2>
   <p>${item.short}</p><a class="link-more" href="${prefix}detalhe.html?id=${item.id}">Ver detalhes</a></div>
 </article>`;
}
// Recebe uma lista de títulos e exibe os cards dentro da seção correspondente da página.
function renderLista(lista, destino = "lista") {
  const el = document.getElementById(destino);
  if (!el) return;
  el.innerHTML = lista.length ? lista.map(itemCard).join("") : '<p class="empty">Nenhum título encontrado.</p>';
}
// Configura as interações do menu principal e do submenu de categorias.
function configurarMenu() {
  const btn = document.getElementById("menuButton"), menu = document.getElementById("mainMenu"), cat = document.getElementById("categoryTrigger"), sub = document.getElementById("categorySubmenu");
  // Abre ou fecha o menu principal quando o botão de três traços é clicado.
  if (btn && menu) btn.addEventListener("click", () => { menu.classList.toggle("open"); btn.setAttribute("aria-expanded", menu.classList.contains("open")); });
  // Abre ou fecha as opções de categorias quando o usuário clica em Categorias.
  if (cat && sub) cat.addEventListener("click", () => { sub.classList.toggle("open"); cat.setAttribute("aria-expanded", sub.classList.contains("open")); });
  document.addEventListener("click", e => { if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) menu.classList.remove("open"); });
}
// Aguarda o carregamento do HTML para configurar os eventos do menu.
document.addEventListener("DOMContentLoaded", configurarMenu);
