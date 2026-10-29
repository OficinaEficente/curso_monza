# Curso Monza DHB

Landing page estática da Oficina Eficiente, servida por Cloudflare Workers.

## Desenvolvimento e validação

- `npm ci`
- `npm run dev`
- `npm run build` — valida o empacotamento do Worker e dos assets sem publicar.
- `npm run deploy` — publica na Cloudflare com credenciais autorizadas.

Cloudflare: projeto `curso-monza`, assets em `public`, deploy `npx wrangler deploy`. O comando de build pode ficar vazio ou usar `npm run build`.

## Inscrição e integrações

Todos os botões de inscrição abrem um dialog acessível. O script AtendeIA é carregado uma única vez, na primeira abertura. Sua configuração oficial determina o checkout, sem fallback para outro produto. Consulta GET em 29/10/2026 com origem `https://monza.oficinaeficiente.com.br`: formulário “Formulário do site do Monza”, redirecionamento `https://chk.eduzz.com/60E2KQ3BW3`. Nenhum cadastro ou compra foi enviado na validação. Verificar a liberação da origem caso seja usado outro domínio.

Google Analytics `G-98TJFWXW7C` preservado. Sem Chatfuel ou Meta Pixel/CAPI no projeto atual. Preço: R$ 97,00, sem parcelamento anunciado.

## Imagens e depoimentos

Foto existente `public/hero_monza.webp` (1672 × 941, cerca de 49 KB), exibida inteira e com prioridade de carregamento. Os três players SafeVideo vêm da página Gol; são identificados como relatos sobre outros treinamentos, não sobre o Monza. Cada player só é carregado ao clicar.
