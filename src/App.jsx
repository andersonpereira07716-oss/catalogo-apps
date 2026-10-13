import React from 'react';

export default function App() {
  const linkDownloadChronos = "https://chronos-protocol-guug.vercel.app";
  const linkWhatsApp = "https://wa.me/5583998765554?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Chronos%20Protocol%20e%20a%20versão%20sem%20anúncios.";
  const linkVizinhanca = "https://vizinhanca-ativa-pro.vercel.app";

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', padding: '16px', alignItems: 'center' }}>

      {/* Header */}
      <header style={{ width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #1e293b', marginBottom: '24px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#38bdf8' }}>Silva Apps & Games</span>
        <span style={{ fontSize: '11px', backgroundColor: '#1e1b4b', color: '#818cf8', padding: '4px 10px', borderRadius: '999px', border: '1px solid #312e81' }}>Catálogo Oficial</span>
      </header>

      {/* Main Content */}
      <main style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>

        {/* Destaque 1: Chronos Protocol */}
        <div style={{ width: '100%', backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#082f49', color: '#38bdf8', fontSize: '12px', padding: '4px 12px', borderRadius: '999px', marginBottom: '16px', border: '1px solid #0369a1' }}>
            ✨ Lançamento em Destaque
          </div>

          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #4f46e5, #06b6d4)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '16px', boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)' }}>
            🎮
          </div>

          <h1 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '10px', color: '#ffffff' }}>
            Chronos Protocol
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', marginBottom: '20px' }}>
            Mergulhe em uma experiência imersiva de gameplay e estratégia diretamente no seu dispositivo móvel.
          </p>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={linkDownloadChronos}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', backgroundColor: '#4f46e5', color: '#ffffff', fontWeight: '600', padding: '12px', borderRadius: '12px', textDecoration: 'none', display: 'block', textAlign: 'center', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
            >
              Acessar / Jogar Chronos Protocol
            </a>

            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: '100%', backgroundColor: '#0f172a', color: '#cbd5e1', fontWeight: '600', padding: '12px', borderRadius: '12px', textDecoration: 'none', display: 'block', textAlign: 'center', border: '1px solid #1e293b' }}
            >
              Suporte via WhatsApp
            </a>
          </div>
        </div>

        {/* Destaque 2: Vizinhança Segura */}
        <div style={{ width: '100%', backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#064e3b', color: '#34d399', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '999px', marginBottom: '16px', border: '1px solid #047857' }}>
            🛡️ Segurança Comunitária • Patos - PB
          </div>

          <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #059669, #10b981)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '16px', boxShadow: '0 8px 20px -4px rgba(16, 185, 129, 0.4)' }}>
            🚨
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px', color: '#ffffff' }}>
            Vizinhança Segura
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.5', marginBottom: '20px' }}>
            Plataforma de monitorização comunitária em tempo real para Patos/PB. Mapa com geolocalização GPS, alertas por bairro, botão SOS e contactos úteis.
          </p>

          <a
            href={linkVizinhanca}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%', backgroundColor: '#059669', color: '#ffffff', fontWeight: '600', padding: '12px', borderRadius: '12px', textDecoration: 'none', display: 'block', textAlign: 'center', boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)' }}
          >
            Acessar Vizinhança Segura
          </a>
        </div>

      </main>
    </div>
  );
}
