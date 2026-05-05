import { useState } from 'react';
import logoImage from 'figma:asset/abee3f585aff52268de5274d40e3429f059c24d5.png';

type Sexo = 'masculino' | 'feminino';
type NivelAtividade = 'sedentario' | 'moderado' | 'intenso';

function calcularTMB(sexo: Sexo, peso: number, altura: number, idade: number) {
  if (sexo === 'masculino') {
    return 10 * peso + 6.25 * altura - 5 * idade + 5;
  }
  return 10 * peso + 6.25 * altura - 5 * idade - 161;
}

const FATORES: Record<NivelAtividade, number> = {
  sedentario: 1.2,
  moderado: 1.55,
  intenso: 1.725,
};

export default function CalculadoraTMB() {
  const [sexo, setSexo] = useState<Sexo>('masculino');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [tmb, setTmb] = useState<number | null>(null);
  const [erroTmb, setErroTmb] = useState('');

  const [atividade, setAtividade] = useState<NivelAtividade>('sedentario');
  const [ndc, setNdc] = useState<number | null>(null);
  const [erroNdc, setErroNdc] = useState('');

  function handleCalcularTMB() {
    const p = Number(peso);
    const a = Number(altura);
    const i = Number(idade);
    if (!p || !a || !i) {
      setErroTmb('Preencha todos os campos.');
      setTmb(null);
      return;
    }
    setErroTmb('');
    const resultado = calcularTMB(sexo, p, a, i);
    setTmb(Math.round(resultado));
    setNdc(null);
  }

  function handleCalcularNDC() {
    if (!tmb) {
      setErroNdc('Calcule sua TMB primeiro (1ª Etapa).');
      return;
    }
    setErroNdc('');
    setNdc(Math.round(tmb * FATORES[atividade]));
  }

  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      {/* Logo com contorno */}
      <div className="flex justify-center pt-8 pb-6">
        <a href="/" className="bg-[#212d3b] rounded-2xl p-5 sm:p-6 inline-block border border-[#2a3a4c]">
          <img src={logoImage} alt="Brasileiro Team" className="h-14 sm:h-18 w-auto" />
        </a>
      </div>

      {/* Título */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-2 flex items-center justify-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="8" y2="10.01" />
            <line x1="12" y1="10" x2="12" y2="10.01" />
            <line x1="16" y1="10" x2="16" y2="10.01" />
            <line x1="8" y1="14" x2="8" y2="14.01" />
            <line x1="12" y1="14" x2="12" y2="14.01" />
            <line x1="16" y1="14" x2="16" y2="14.01" />
            <line x1="8" y1="18" x2="8" y2="18.01" />
            <line x1="12" y1="18" x2="12" y2="18.01" />
            <line x1="16" y1="18" x2="16" y2="18.01" />
          </svg>
          Calculadora de TMB
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Calcule sua Taxa de Metabolismo Basal e Necessidade Diária de Calorias
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 pb-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1ª Etapa - TMB */}
          <div className="bg-[#212d3b] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              1ª Etapa - Taxa de Metabolismo Basal (TMB)
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              É o total de calorias gastas para manter as funções prejudiciais, como os corações cardíacos, a pressão arterial e a temperatura corporal.
            </p>

            {/* Gênero */}
            <div className="mb-5">
              <label className="font-bold text-sm mb-2 block">Gênero</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sexo"
                    checked={sexo === 'masculino'}
                    onChange={() => setSexo('masculino')}
                    className="w-4 h-4 accent-green-500"
                  />
                  <span className="text-sm">masculino</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sexo"
                    checked={sexo === 'feminino'}
                    onChange={() => setSexo('feminino')}
                    className="w-4 h-4 accent-green-500"
                  />
                  <span className="text-sm">feminino</span>
                </label>
              </div>
            </div>

            {/* Peso */}
            <div className="mb-4">
              <label className="font-bold text-sm mb-1.5 block">Peso (kg)</label>
              <input
                type="number"
                inputMode="decimal"
                placeholder="Ex: 70"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="w-full bg-[#2a3a4c] border border-[#3a4a5c] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Altura */}
            <div className="mb-4">
              <label className="font-bold text-sm mb-1.5 block">Altura (cm)</label>
              <input
                type="number"
                inputMode="numeric"
                placeholder="Ex: 175"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="w-full bg-[#2a3a4c] border border-[#3a4a5c] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Idade */}
            <div className="mb-6">
              <label className="font-bold text-sm mb-1.5 block">Idade (anos)</label>
              <input
                type="number"
                inputMode="numeric"
                placeholder="Ex: 30"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                className="w-full bg-[#2a3a4c] border border-[#3a4a5c] rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            {/* Erro TMB */}
            {erroTmb && (
              <p className="text-red-400 text-sm mb-3">{erroTmb}</p>
            )}

            {/* Botão TMB */}
            <button
              onClick={handleCalcularTMB}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors text-sm"
            >
              Calculadora TMB
            </button>

            {/* Resultado TMB */}
            {tmb && (
              <div className="mt-5 text-center p-4 bg-[#1a2332] rounded-xl border border-green-500/30">
                <p className="text-sm text-gray-400 mb-1">Sua TMB é de</p>
                <p className="text-3xl font-black text-green-400">{tmb.toLocaleString('pt-BR')} <span className="text-lg font-normal text-gray-400">kcal/dia</span></p>
              </div>
            )}
          </div>

          {/* 2ª Etapa - NDC */}
          <div className="bg-[#212d3b] rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              2ª Etapa - Necessidade Diária de Calorias (NDC)
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Considerando sua rotina de exercícios físicos.
            </p>

            {/* Nível de Atividade */}
            <div className="mb-8">
              <label className="font-bold text-sm mb-3 block">Nível de Atividade Física</label>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="atividade"
                    checked={atividade === 'sedentario'}
                    onChange={() => setAtividade('sedentario')}
                    className="w-4 h-4 accent-green-500 mt-0.5"
                  />
                  <span className="text-sm">Nenhuma atividade física (sedentário)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="atividade"
                    checked={atividade === 'moderado'}
                    onChange={() => setAtividade('moderado')}
                    className="w-4 h-4 accent-green-500 mt-0.5"
                  />
                  <span className="text-sm">Atividade física moderada (3-5 dias/semana)</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="atividade"
                    checked={atividade === 'intenso'}
                    onChange={() => setAtividade('intenso')}
                    className="w-4 h-4 accent-green-500 mt-0.5"
                  />
                  <span className="text-sm">Atividade física intensa (6-7 dias/semana)</span>
                </label>
              </div>
            </div>

            {/* Erro NDC */}
            {erroNdc && (
              <p className="text-red-400 text-sm mb-3">{erroNdc}</p>
            )}

            {/* Botão NDC */}
            <button
              onClick={handleCalcularNDC}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors text-sm"
            >
              Calculadora NDC
            </button>

            {/* Resultado NDC */}
            {ndc && (
              <div className="mt-5 text-center p-4 bg-[#1a2332] rounded-xl border border-green-500/30">
                <p className="text-sm text-gray-400 mb-1">Sua NDC é de</p>
                <p className="text-3xl font-black text-green-400">{ndc.toLocaleString('pt-BR')} <span className="text-lg font-normal text-gray-400">kcal/dia</span></p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
