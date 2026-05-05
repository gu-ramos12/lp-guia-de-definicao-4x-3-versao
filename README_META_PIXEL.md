# Integração Meta Pixel — Guia de Definição 4X

**Pixel ID:** `1217399416964631` (Guia-definição-4x)

---

## 📁 Estrutura dos arquivos

### Arquivos NOVOS (criar)

```
src/lib/metaPixel.ts                    ← biblioteca core do Pixel
src/components/MetaPixel.tsx            ← componente que monta o Pixel
src/hooks/useScrollDepth.ts             ← Scroll 50%
src/hooks/useInView.ts                  ← ViewContent na oferta
src/hooks/useVSLPlay.ts                 ← Play do Panda Video
```

### Arquivos MODIFICADOS (substituir)

```
src/pages/LandingPage.tsx               ← + MetaPixel + useScrollDepth
src/components/Header.tsx               ← + tracking InitiateCheckout
src/components/HeroSection.tsx          ← + tracking InitiateCheckout + VSL_Play
src/components/OfferSection.tsx         ← + tracking ViewContent + InitiateCheckout
src/components/FinalCTASection.tsx      ← + tracking InitiateCheckout
src/components/StickyCTAMobile.tsx      ← + tracking InitiateCheckout
src/components/FAQSection.tsx           ← + tracking FAQ_Open
```

---

## 📊 Eventos que vão disparar

| Evento | Tipo | Quando dispara |
|---|---|---|
| `PageView` | Padrão Meta | Automático — ao carregar a LP |
| `InitiateCheckout` | Padrão Meta | Clique em qualquer um dos 5 CTAs (header, hero, offer, final, sticky_mobile) |
| `ViewContent` | Padrão Meta | Quando 30% da `OfferSection` entra na tela (1x) |
| `Scroll_50` | Custom | Quando o usuário rola 50% da página (1x) |
| `FAQ_Open` | Custom | Quando uma pergunta do FAQ é aberta (1x por pergunta) |
| `VSL_Play` | Custom | Quando o vídeo do Panda começa a tocar (1x) |

---

## ✅ Como validar a instalação

### 1. Meta Pixel Helper (Chrome Extension)
Instale: https://chrome.google.com/webstore/detail/meta-pixel-helper

Abra a LP em produção e clique no ícone da extensão. Deve aparecer:
- Pixel ID `1217399416964631` ativo
- `PageView` disparado automaticamente

Ao clicar em CTA → veja `InitiateCheckout` aparecer.
Ao rolar até a oferta → veja `ViewContent` aparecer.
Ao rolar 50% → veja `Scroll_50` aparecer.

### 2. Test Events no Gerenciador de Eventos
Acesse: Eventos > Test Events > cole a URL da LP > navegue normalmente.
Eventos aparecem em tempo real (delay de ~5s).

### 3. Eventos personalizados
Os custom events (`Scroll_50`, `FAQ_Open`, `VSL_Play`) precisam ser **registrados no Gerenciador de Eventos** para você usar como público customizado em campanhas:

1. Gerenciador de Eventos > seu Pixel
2. Eventos personalizados > Criar
3. Para cada um, defina a regra: "URL contém nutribrasileiro.site" + "nome do evento = Scroll_50" (etc.)

---

## 🔥 Próximos passos recomendados

### 1. Evento `Purchase` na página de obrigado (PRIORITÁRIO)
O `Purchase` **não está implementado nesta LP**, e nem deveria estar — ele precisa disparar **só após a compra real**, na página de obrigado/confirmação que a Greenn redireciona depois do pagamento.

A Greenn provavelmente tem um campo nativo nas configurações do produto chamado "Pixel da Meta" ou "Facebook Pixel ID". Se sim, ela já dispara o `Purchase` automaticamente com o valor da venda. Cole `1217399416964631` lá.

Se não houver campo nativo, vou precisar criar uma página de obrigado customizada que você indicará na Greenn como URL de pós-venda.

### 2. Conversions API (CAPI)
Quando estiver com tráfego rodando há ~7 dias e quiser melhorar o match rate em 20-30%, configure a CAPI via Stape, Zapier ou um endpoint serverless na Vercel. Isso contorna bloqueadores de anúncio (iOS 14+, AdBlock).

### 3. Configurar conversões customizadas
No Gerenciador de Eventos, crie conversões customizadas baseadas em UTM:
- "Conversão Header CTA" → `InitiateCheckout` + parâmetro `source = header`
- "Conversão Sticky Mobile" → `InitiateCheckout` + parâmetro `source = sticky_mobile`

Isso permite criar campanhas otimizadas pra cada origem específica.

---

## 🚀 Deploy

```bash
git add .
git commit -m "feat: integra Meta Pixel com tracking de eventos completo"
git push
```

Vercel faz o deploy automático. Aguarde ~1 min e valide com o Pixel Helper.
