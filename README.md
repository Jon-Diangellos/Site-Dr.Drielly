# Site institucional — Driely Marques Advocacia

Projeto de desenvolvimento web para apresentar um escritório de advocacia, suas áreas de atuação e seus canais de contato. Integra o portfólio de Jonathas Oliveira.

## Recursos presentes no código

- Página institucional com navegação entre seções.
- Apresentação das áreas de atuação e imagens da equipe.
- Links de contato por WhatsApp, e-mail e redes sociais.
- Alternância automática dos cartões de avaliações com JavaScript.
- Alteração visual do cabeçalho durante a rolagem.
- Diretório de blog com páginas, scripts e arquivos de conteúdo.

## Tecnologias

HTML, CSS e JavaScript. A página principal utiliza fontes do Google Fonts.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página institucional principal |
| `styleIndex.css` | Estilos da página principal |
| `styleLand.css` | Folha de estilos adicional |
| `imagens/` | Imagens e identidade visual |
| `Blog/` | Páginas e recursos do blog |

## Executar localmente

Com Git e Python 3 instalados:

```bash
git clone https://github.com/Jon-Diangellos/Site-Dr.Drielly.git
cd Site-Dr.Drielly
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador. O blog pode ser inspecionado em `http://localhost:8000/Blog/`. Encerre o servidor com `Ctrl+C`.

## Aprendizados demonstrados

- Estruturação de páginas institucionais com HTML.
- Organização visual com CSS.
- Manipulação do DOM e eventos em JavaScript.
- Integração de canais de contato em um site.

## Estado do projeto

Projeto de portfólio com arquivos de site estático. Esta documentação descreve o código existente; não representa uma validação de publicação, responsividade ou funcionamento completo do blog. Próximas revisões: acessibilidade, comportamento em diferentes telas, links e integração do blog à navegação principal.

## Autor

[Jonathas Oliveira](https://github.com/Jon-Diangellos) · [LinkedIn](https://www.linkedin.com/in/jonathas-diangellos-oliveira/)
