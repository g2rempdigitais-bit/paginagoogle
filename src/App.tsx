/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  Star, 
  Play,
  CheckCircle2,
  ExternalLink,
  Clock,
  Users,
  Heart,
  ArrowRight
} from 'lucide-react';

const googleReviews = [
  { name: "Lorena Souto", date: "26/03/2025", text: "Ótima profissional" },
  { name: "Lilian Camargo", date: "09/03/2025", text: "Foi muito bom. Profissional incrível, atenciosa, respeitosa. Ajuda muito." },
  { name: "Idelma Machado", date: "08/03/2025", text: "Uma excelente profissional" },
  { name: "elton fernando", date: "08/03/2025", text: "Super recomendado, tem nos ajudado muito!" },
  { name: "Daniel Jose", date: "08/03/2025", text: "Aprender com a Dra Karine foi uma experiência sensacional. Me ajudou muito essa experiência e resolveu muitos problemas que eu e minha família tinhamos. Só gratidão que tenho a oferecer." },
];

// Specific social proof images provided by the user
const socialProofImages = [
  { id: 1, url: "https://i.ibb.co/SXWPNKcm/1.jpg" },
  { id: 2, url: "https://i.ibb.co/B2cP21Mx/2.jpg" },
  { id: 3, url: "https://i.ibb.co/BHFbrCcV/3.jpg" },
  { id: 4, url: "https://i.ibb.co/R4VDMnyc/4.jpg" },
  { id: 5, url: "https://i.ibb.co/qMdh376Q/5.jpg" },
  { id: 6, url: "https://i.ibb.co/ZzCY9pLr/6.jpg" },
  { id: 7, url: "https://i.ibb.co/TDb3gmXF/7.jpg" },
  { id: 8, url: "https://i.ibb.co/ynw5n8DJ/8.jpg" },
  { id: 9, url: "https://i.ibb.co/KxGf3ygv/9.jpg" },
  { id: 10, url: "https://i.ibb.co/WNQSQfjN/10.jpg" },
  { id: 11, url: "https://i.ibb.co/DHS1Fp9F/11.jpg" },
  { id: 12, url: "https://i.ibb.co/BV6w4PLw/12.jpg" },
  { id: 13, url: "https://i.ibb.co/tMZ5K4DM/13.jpg" },
  { id: 14, url: "https://i.ibb.co/nq8dNb5D/14.jpg" },
  { id: 15, url: "https://i.ibb.co/Q33VKHqX/15.jpg" },
  { id: 16, url: "https://i.ibb.co/ns1HSMVF/16.jpg" },
  { id: 17, url: "https://i.ibb.co/x853DkV7/17.jpg" },
  { id: 18, url: "https://i.ibb.co/XxVR1PWt/18.jpg" },
  { id: 19, url: "https://i.ibb.co/yFPdMRRV/19.jpg" },
  { id: 20, url: "https://i.ibb.co/V0yqNhJd/20.jpg" },
  { id: 21, url: "https://i.ibb.co/v6fgMcHr/21.jpg" },
  { id: 22, url: "https://i.ibb.co/m5vhbY3p/22.jpg" },
  { id: 23, url: "https://i.ibb.co/mCWsNLDb/23.jpg" }
];

const googleReviewScreenshots = [
  { id: 1, url: "https://i.ibb.co/60vx6nHK/Captura-de-tela-2026-03-04-152118.png" },
  { id: 2, url: "https://i.ibb.co/qh0DgR5/Captura-de-tela-2026-03-04-152153.png" },
  { id: 3, url: "https://i.ibb.co/R4Sx8SnR/Captura-de-tela-2026-03-04-152409.png" },
  { id: 4, url: "https://i.ibb.co/Kp9Hd98s/Captura-de-tela-2026-03-04-152427.png" },
  { id: 5, url: "https://i.ibb.co/7dMKhHBD/Captura-de-tela-2026-03-04-152446.png" },
  { id: 6, url: "https://i.ibb.co/TMwy117h/Captura-de-tela-2026-03-04-152613.png" },
  { id: 7, url: "https://i.ibb.co/HppgRPNr/Captura-de-tela-2026-03-04-152645.png" },
  { id: 8, url: "https://i.ibb.co/rG8tGJkH/Captura-de-tela-2026-03-04-152702.png" }
];

export default function App() {
  const whatsappUrl = "https://wa.me/5585994477339?text=200. Vim do site e gostaria de saber como funciona a terapia";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="atmospheric-blur bg-violet-400 w-[500px] h-[500px] -top-24 -left-24" />
        <div className="atmospheric-blur bg-violet-200 w-[600px] h-[600px] top-1/2 -right-24" />
      </div>

      <main className="relative z-10">
        {/* Header / Hero Section */}
        <section className="pt-12 md:pt-20 pb-10 md:pb-16 px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-serif font-bold mb-2 tracking-tight leading-tight"
            >
              Terapia de Casal
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-5xl font-serif text-violet-600 italic mb-8 md:mb-10"
            >
              Especialista em crises
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Se em seu relacionamento há brigas, falta de diálogo, mágoas e traições, a terapia de casal é a solução.
            </motion.p>

            {/* YouTube Video Embed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-video max-w-3xl mx-auto rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl mb-4 bg-slate-900"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/HcYomdiyaLA?si=YY2i_Lv9bCfvqMi1&amp;controls=0&amp;start=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
            
            <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest mb-8 md:mb-10">
              Tempo de vídeo : 3 minutos...
            </p>

            <motion.a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-violet-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-violet-700 transition-all shadow-xl shadow-violet-200 text-base md:text-lg font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Marcar Agora
            </motion.a>
          </div>
        </section>

        {/* Social Proof Images - Horizontal Scroll on Mobile, Drag on Desktop */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-white/50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-center mb-12 md:mb-16 font-serif font-bold">
              O que dizem sobre Karinne Bruno
            </h2>
            
            <div className="relative">
              <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:cursor-grab active:md:cursor-grabbing">
                {socialProofImages.map((img) => (
                  <div 
                    key={img.id}
                    className="w-[260px] md:w-[300px] shrink-0 aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg snap-center"
                  >
                    <img 
                      src={img.url} 
                      alt={`Prova social ${img.id + 1}`} 
                      className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest animate-pulse">
                  Deslize para ver mais →
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Como posso te ajudar Section */}
        <section id="servicos" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-6xl mb-2 md:mb-4 font-serif font-bold">Como posso</h2>
              <h3 className="text-2xl md:text-4xl font-serif text-violet-600 italic mb-4 md:mb-6">te ajudar</h3>
              <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Utilizando a Psicologia clínica e fundamentos da psicanálise e análise Junguiana, 
                trabalhamos as raízes do conflito para uma mudança de atitude e fortalecimento do vínculo afetivo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                {
                  title: "Sessão única de orientação",
                  desc: "Com base nos princípios da psicologia breve, identificamos já na primeira sessão os principais fatores que estão causando a desconexão no relacionamento e indicamos caminhos práticos para trabalhá-los.",
                  icon: <Clock className="w-6 h-6" />
                },
                {
                  title: "Terapia de Casal",
                  desc: "Com um protocolo mais estruturado e acompanhamento semanal, revisamos cada ponto de desconexão e trabalhamos suas causas mais profundas.",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  title: "Terapia Individual",
                  desc: "Com um protocolo semanal individual, trabalhamos os conflitos do relacionamento a partir do próprio indivíduo, ajudando a tomar decisões com clareza — inclusive sobre continuar ou não — e a construir um relacionamento mais saudável, mesmo sem a participação do parceiro.",
                  icon: <Heart className="w-6 h-6" />
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 md:p-10 rounded-3xl md:rounded-[40px] glass border border-slate-200 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-100 rounded-xl md:rounded-2xl flex items-center justify-center text-violet-600 mb-6 md:mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl mb-4 md:mb-6 font-serif font-bold leading-tight">{service.title}</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-violet-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all"
              >
                MARCAR AGORA
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <section className="py-16 md:py-24 px-4 md:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-4 md:mb-6">
                <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-6xl font-serif font-bold mb-2">Excelente</h2>
              <h3 className="text-xl md:text-3xl font-serif text-violet-600 italic mb-4 md:mb-6">Avaliações no Google</h3>
              <div className="flex justify-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />)}
              </div>
              <p className="text-[10px] md:text-sm text-slate-500 uppercase tracking-widest">
                Com base em 104 avaliações
              </p>
            </div>

            {/* Google Review Screenshots Carousel - Horizontal Scroll on Mobile */}
            <div className="relative mb-12 md:mb-16">
              <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                {googleReviewScreenshots.map((img) => (
                  <div 
                    key={img.id}
                    className="w-[260px] md:w-[300px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-100 snap-center"
                  >
                    <img 
                      src={img.url} 
                      alt={`Google Review ${img.id}`} 
                      className="w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest animate-pulse">
                  Deslize para ver mais avaliações →
                </p>
              </div>
            </div>

            <div className="text-center">
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-violet-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all"
              >
                MARCAR AGORA
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white/40">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Desktop Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <img 
                src="https://i.ibb.co/BVjKm8jt/Chat-GPT-Image-4-de-mar-de-2026-15-15-22.png" 
                alt="Sobre Karinne Bruno" 
                className="rounded-[40px] shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700 w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-6xl font-serif font-bold mb-2">Sobre</h2>
              <h3 className="text-2xl md:text-4xl font-serif text-violet-600 italic mb-6 md:mb-8">Karinne Bruno</h3>
              
              {/* Mobile Image - Shown only on mobile, right after headline */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:hidden mb-10"
              >
                <img 
                  src="https://i.ibb.co/BVjKm8jt/Chat-GPT-Image-4-de-mar-de-2026-15-15-22.png" 
                  alt="Sobre Karinne Bruno Mobile" 
                  className="rounded-3xl shadow-xl grayscale-[10%] w-full"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>

              <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-slate-700">
                {[
                  "Psicóloga;",
                  "Graduada em Pedagogia Analítica",
                  "Pós graduada em Psicologia Analítica Junguiana;",
                  "Psicanalista Clínica;",
                  "Mediadora de conflitos;",
                  "Mais de 100 casais atendidos com 5 estrelas no Google."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-violet-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 md:mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 md:p-6 rounded-2xl md:rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group max-w-xl"
                >
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 md:gap-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-fuchsia-600 to-violet-600 shrink-0">
                      <div className="w-full h-full rounded-full p-0.5 bg-white">
                        <img 
                          src="https://i.ibb.co/BVjKm8jt/Chat-GPT-Image-4-de-mar-de-2026-15-15-22.png" 
                          alt="Avatar Karinne Bruno" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow text-center sm:text-left">
                      <h4 className="text-base md:text-lg font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                        @psi.karinnebruno
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white fill-current" />
                        </div>
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm font-medium">Psicóloga Clínica</p>
                    </div>
                    <a 
                      href="https://www.instagram.com/psi.karinnebruno/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#0f172a] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-violet-600 transition-all shadow-lg w-full sm:w-auto justify-center"
                    >
                      <Instagram className="w-4 h-4" />
                      Seguir
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-7xl font-serif font-bold mb-2 md:mb-4 leading-tight">
                Pronta para transformar
              </h2>
              <h3 className="text-2xl md:text-5xl font-serif text-violet-400 italic mb-8 md:mb-12">
                seu relacionamento?
              </h3>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 leading-relaxed">
                Dê o primeiro passo hoje para reconstruir a conexão e a felicidade que você merece.
              </p>
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-violet-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl shadow-2xl shadow-violet-900/20 hover:bg-violet-700 transition-all"
              >
                MARCAR AGORA
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button for Mobile */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-serif font-bold mb-4">
            Terapia <span className="text-violet-600 italic">Karinne Bruno</span>
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Terapia Karinne Bruno.
          </p>
        </div>
      </footer>
    </div>
  );
}
