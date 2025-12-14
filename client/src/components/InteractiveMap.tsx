import React from 'react';
import './InteractiveMap.css';
import { Share2, Users, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function InteractiveMap() {
  return (
    <div className="distribution-map w-full h-full">
      {/* Background SVG connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
        <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="currentColor" strokeWidth="1" className="text-destructive" />
        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-destructive" />
        <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-destructive" />
        <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
      </svg>

      {/* Central Node - Cluster Alpha */}
      <button className="map-point" style={{ top: '50%', left: '50%' }}>
        <div className="absolute inset-0 flex items-center justify-center text-destructive">
          <Share2 className="h-5 w-5" />
        </div>
        <div className="content">
          <div className="centered-y">
            <h2>Cluster Alpha</h2>
            <p className="mb-2"><strong>Ameaça Crítica</strong></p>
            <p>Origem: Botnet X/Twitter #992</p>
            <p>Alcance: 45.000 usuários</p>
            <p className="mt-2 text-destructive font-bold">Risco de Viralidade: 98%</p>
          </div>
        </div>
      </button>

      {/* Cluster Beta */}
      <button className="map-point warning" style={{ top: '20%', left: '80%' }}>
         <div className="absolute inset-0 flex items-center justify-center text-orange-500">
          <Users className="h-5 w-5" />
        </div>
        <div className="content">
          <div className="centered-y">
            <h2 className="text-orange-500">Cluster Beta</h2>
            <p className="mb-2"><strong>Grupo Telegram "Truth"</strong></p>
            <p>Alcance: 12.000 usuários</p>
            <p>Velocidade: Média</p>
            <p className="mt-2 text-orange-500 font-bold">Contido (Monitorando)</p>
          </div>
        </div>
      </button>

      {/* Safe Node */}
      <button className="map-point safe" style={{ top: '70%', left: '30%' }}>
         <div className="absolute inset-0 flex items-center justify-center text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="content">
          <div className="centered-y">
            <h2 className="text-primary">Zona Segura</h2>
            <p>Nenhuma atividade suspeita detectada nesta região.</p>
            <p className="mt-2 text-green-500 font-bold">Integridade: 100%</p>
          </div>
        </div>
      </button>

      {/* Another Node */}
      <button className="map-point warning" style={{ top: '30%', left: '20%' }}>
        <div className="absolute inset-0 flex items-center justify-center text-orange-500">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="content">
          <div className="centered-y">
            <h2 className="text-orange-500">Anomalia #404</h2>
            <p>Padrões de tráfego incomuns detectados.</p>
            <p>Fonte: Desconhecida</p>
            <p className="mt-2">Analisando...</p>
          </div>
        </div>
      </button>
    </div>
  );
}
