import { CheckCircle2, Mail, Smartphone, BookOpen, Gift, KeyRound } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { MetaPixel } from '../components/MetaPixel';
import logoImage from 'figma:asset/abee3f585aff52268de5274d40e3429f059c24d5.png';

// ============================================================================
// 🔧 URL da área de membros (Greenn)
// ============================================================================
const MEMBERS_AREA_URL = 'https://app.greenn.club/';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* MetaPixel: dispara PageView automático nesta rota */}
      <MetaPixel />

      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-green-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <img src={logoImage} alt="Rodrigo Brasileiro Team" className="h-10 md:h-12 w-auto" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 mb-10 md:mb-12"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/30 rounded-full blur-3xl"></div>
              <CheckCircle2 className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-green-400 relative" />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
              Parabéns pela sua <span className="text-green-400">Decisão!</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Você acaba de dar o primeiro passo rumo à <span className="text-green-400 font-semibold">transformação do seu corpo</span>
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-5 py-2.5 sm:px-6 sm:py-3">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-green-400 font-semibold text-sm sm:text-base">Compra confirmada com sucesso</span>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center mb-6 md:mb-8 px-2">
            Próximos <span className="text-green-400">Passos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-500/20 rounded-lg p-2.5 sm:p-3 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">1. Verifique seu e-mail</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Enviamos um e-mail de confirmação com todos os detalhes do seu pedido e instruções de acesso.
                    </p>
                    <p className="text-xs sm:text-sm text-green-400">
                      ⚠️ Não se esqueça de verificar a caixa de spam!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-500/20 rounded-lg p-2.5 sm:p-3 flex-shrink-0">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">2. Acesso imediato</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Você receberá acesso instantâneo ao Guia de Definição 4X e todos os bônus exclusivos.
                    </p>
                    <p className="text-xs sm:text-sm text-green-400">
                      ✅ Disponível em todos os dispositivos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-500/20 rounded-lg p-2.5 sm:p-3 flex-shrink-0">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">3. Comece hoje mesmo</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Não espere! Quanto antes começar, mais rápido verá os resultados da sua transformação.
                    </p>
                    <p className="text-xs sm:text-sm text-green-400">
                      🚀 Primeiros resultados em semanas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-500/20 rounded-lg p-2.5 sm:p-3 flex-shrink-0">
                    <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">4. Aproveite os bônus</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      R$ 228 em bônus exclusivos já estão disponíveis na sua área de membros.
                    </p>
                    <p className="text-xs sm:text-sm text-green-400">
                      🎁 4 bônus exclusivos liberados
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA destacado: Acessar Área de Membros (após Próximos Passos) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto mb-16 md:mb-20 px-4"
        >
          <div className="relative">
            {/* Glow radiante atrás do card */}
            <div
              className="absolute -inset-5 sm:-inset-6 rounded-2xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 60%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Card */}
            <Card className="relative bg-slate-900/85 border border-green-500/40 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-5">
                <div className="flex justify-center">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-full p-3 sm:p-4">
                    <KeyRound className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                    Seu acesso está <span className="text-green-400">liberado!</span>
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Clique abaixo para entrar na sua área de membros e começar agora mesmo.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black text-base sm:text-lg font-bold py-3 sm:py-4 px-6 sm:px-10"
                >
                  <a href={MEMBERS_AREA_URL} target="_blank" rel="noopener noreferrer">
                    🚀 Acessar Área de Membros
                  </a>
                </Button>
                <p className="text-xs sm:text-sm text-gray-400">
                  Use o e-mail e senha que você recebeu por e-mail
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* What You Received */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center mb-6 md:mb-8 px-2">
            O que você <span className="text-green-400">Recebeu</span>
          </h2>

          <Card className="bg-slate-800/50 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 pb-4 border-b border-slate-700">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Guia de Definição 4X</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Método completo e comprovado para acelerar seu emagrecimento e conquistar o abdômen definido
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 pb-4 border-b border-slate-700">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">BÔNUS 1 - Valor R$ 87</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Conteúdo exclusivo para potencializar seus resultados</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 pb-4 border-b border-slate-700">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">BÔNUS 2 - Valor R$ 67</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Material complementar para acelerar sua transformação</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 pb-4 border-b border-slate-700">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">BÔNUS 3 - Valor R$ 37</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Recursos adicionais para otimizar seus treinos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">BÔNUS 4 - Valor R$ 37</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Lista de substituição para alimentos e bebidas</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-5 sm:p-6 mt-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-1 text-sm sm:text-base">Valor total do pacote:</p>
                  <p className="text-2xl sm:text-3xl font-black text-green-400">R$ 228 em benefícios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <Card className="bg-slate-800/50 border border-green-500/20 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
                <div className="flex justify-center">
                  <div className="bg-green-500/20 rounded-full p-3 sm:p-4">
                    <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                  Garantia de <span className="text-green-400">7 Dias</span>
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  Você tem 7 dias para experimentar o Guia de Definição 4X. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.
                </p>
                <p className="text-green-400 font-semibold text-sm sm:text-base">
                  Seu investimento está 100% protegido!
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-green-500/20 mt-12 md:mt-20">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <img src={logoImage} alt="Rodrigo Brasileiro Team" className="h-10 sm:h-12 w-auto mx-auto" />
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Rodrigo Brasileiro Team. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
