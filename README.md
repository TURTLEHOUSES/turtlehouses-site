# turtlehouses.pt

Site da Turtle Houses, Lda em HTML, CSS e JavaScript, sem WordPress. Foi gerado a 26-10-2026 a partir do tema "Turtle Houses" 1.0.3 que estava no WordPress da MEO (turtlehouses.pt/main/), e é publicado pelo GitHub Pages.

## Mudar textos e fotografias

Em https://app.pagescms.org, com a conta TURTLEHOUSES ou com um convite por email. Cada página aparece com os seus textos e fotografias, e o rodapé (comum a todas as páginas) tem uma entrada própria. Ao gravar, o site atualiza em cerca de um minuto.

## Como está organizado

- `_data/paginas/<pagina>.json` tem os textos e as fotografias de cada página, e `_data/rodape.json` os do rodapé. É isto que o editor muda.
- `index.html` e as pastas (`conceito/`, `contactos/`, ...) são os moldes das páginas. O GitHub Pages junta-os com os dados (Jekyll) ao publicar. Os `{{ ... }}` dos moldes voltam a pôr o estilo original em cada parágrafo, por isso não se mexe neles para mudar um texto.
- `.pages.yml` diz ao editor que campos mostrar.
- `tema/` tem o CSS, o JavaScript, as imagens e as fontes. As fotografias novas que se carregam no editor também ficam em `tema/assets/`.
- `main/` reencaminha os endereços antigos: `/main/` para `/index.html` e `/main/?turtle_preview=...` para a página nova. Vai para `/index.html` e não para `/` porque o site antigo reencaminhava `/` para `/main` com um 301, que os browsers guardam, e `/` fazia um ciclo. Pode apagar-se quando já ninguém chegar por esses endereços (meados de 2027).
