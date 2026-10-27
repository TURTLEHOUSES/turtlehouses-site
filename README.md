# turtlehouses.pt

Site da Turtle Houses, Lda em HTML, CSS e JavaScript, sem WordPress. Foi gerado a 26-10-2026 a partir do tema "Turtle Houses" 1.0.3 que estava no WordPress da MEO (turtlehouses.pt/main/).

- `index.html` é a página inicial e cada pasta (`conceito/`, `contactos/`, ...) é uma página.
- `tema/` tem o CSS, o JavaScript, as imagens e as fontes.
- `main/` reencaminha os endereços antigos: `/main/` para `/index.html` e `/main/?turtle_preview=...` para a página nova. Vai para `/index.html` e não para `/` porque o site antigo reencaminhava `/` para `/main` com um 301, que os browsers guardam, e `/` fazia um ciclo. Pode apagar-se quando já ninguém chegar por esses endereços (meados de 2027).

Para mudar um texto, edita-se o `index.html` da página e faz-se commit. O GitHub Pages publica em cerca de um minuto.
