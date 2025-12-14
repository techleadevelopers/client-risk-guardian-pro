# Risk Guardian Platform

Uma plataforma empresarial de defesa cognitiva e detecção de desinformação em tempo real, projetada para identificar, analisar e mitigar campanhas de desinformação coordenadas (CIB) e conteúdo gerado por IA (Deepfakes).

Este projeto utiliza uma arquitetura de microsserviços moderna, separando o frontend (React), o backend de orquestração (NestJS) e o motor de inteligência artificial (Python/FastAPI).

---

## 🏗️ Arquitetura do Sistema

A solução é composta por três componentes principais que devem ser executados em contêineres ou serviços separados:

1.  **Frontend (Client)**: Interface do usuário em React/Vite.
2.  **Backend (API Gateway & Orquestrador)**: NestJS com Prisma ORM.
3.  **AI Engine (Motor de Inferência)**: Python com FastAPI/PyTorch.

### Fluxo de Dados

1.  O usuário envia uma URL ou Texto via Frontend.
2.  O Frontend chama a API do NestJS (`POST /api/scan`).
3.  O NestJS salva a requisição no PostgreSQL (status: `PENDING`) e envia para a fila de processamento (RabbitMQ/Redis) ou chama o serviço Python diretamente.
4.  O Motor de IA (Python) processa o conteúdo (detecta fake news, deepfakes, sentimento).
5.  O Motor de IA devolve o resultado para o NestJS.
6.  O NestJS atualiza o banco de dados e notifica o frontend (via WebSocket ou Polling).

---

## 🚀 1. Frontend (React + Vite)

Este repositório contém o código fonte do frontend atual.

### Pré-requisitos
*   Node.js 20+
*   npm ou yarn

### Instalação e Execução
```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev:client
```

A aplicação estará disponível em `http://localhost:5000`.

### Principais Bibliotecas
*   **UI**: TailwindCSS, Radix UI, Lucide Icons.
*   **Estado**: React Query (TanStack Query).
*   **Gráficos**: Recharts.
*   **Mapas**: SVG Interativo Customizado.

---

## 🛠️ 2. Backend (NestJS + Prisma)

> **Nota**: O código abaixo é um guia de implementação para ser criado em um repositório separado ou na pasta `server/` se migrado para full-stack.

### Estrutura Recomendada
```
backend/
├── src/
│   ├── auth/           # Autenticação (JWT, Passport)
│   ├── scans/          # Gerenciamento de Scans
│   ├── reports/        # Geração de Relatórios
│   ├── webhooks/       # Integrações Externas
│   ├── prisma/         # Serviço do Prisma
│   └── app.module.ts
├── prisma/
│   └── schema.prisma   # Definição do Banco de Dados
└── docker-compose.yml
```

### Configuração Inicial

1.  **Criar projeto NestJS**:
    ```bash
    npm i -g @nestjs/cli
    nest new risk-guardian-backend
    cd risk-guardian-backend
    ```

2.  **Instalar Prisma e PostgreSQL**:
    ```bash
    npm install prisma --save-dev
    npm install @prisma/client
    npx prisma init
    ```

3.  **Definir Schema (`prisma/schema.prisma`)**:

    ```prisma
    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    model User {
      id        String   @id @default(uuid())
      email     String   @unique
      password  String
      role      Role     @default(ANALYST)
      scans     Scan[]
      createdAt DateTime @default(now())
    }

    model Scan {
      id            String      @id @default(uuid())
      content       String      @db.Text
      sourceUrl     String?
      status        ScanStatus  @default(PENDING)
      riskScore     Float?      // 0-100
      aiProbability Float?      // 0-100
      verdict       Verdict?
      metadata      Json?
      userId        String
      user          User        @relation(fields: [userId], references: [id])
      createdAt     DateTime    @default(now())
    }

    enum Role {
      ADMIN
      ANALYST
      VIEWER
    }

    enum ScanStatus {
      PENDING
      PROCESSING
      COMPLETED
      FAILED
    }

    enum Verdict {
      REAL
      FAKE
      SATIRE
      UNVERIFIED
    }
    ```

4.  **Rotas Consolidadas (Controllers)**:

    **Auth Controller (`auth.controller.ts`)**
    *   `POST /auth/login`: Retorna JWT.
    *   `POST /auth/register`: Cria novo usuário.

    **Scan Controller (`scans.controller.ts`)**
    *   `POST /scans`: Inicia uma nova análise.
        *   Body: `{ content: string, url?: string }`
    *   `GET /scans`: Lista histórico com paginação.
    *   `GET /scans/:id`: Detalhes de uma análise.
    *   `POST /scans/:id/takedown`: Aciona webhook de remoção.

    **Dashboard Controller (`dashboard.controller.ts`)**
    *   `GET /dashboard/stats`: Retorna contadores (Total Scans, Ameaças Ativas).
    *   `GET /dashboard/virality`: Dados para o mapa de viralidade.

---

## 🧠 3. AI Engine (Python)

Este serviço deve expor uma API REST (FastAPI) ou consumir de uma fila para realizar a inferência pesada.

### Estrutura Recomendada
```
ai-engine/
├── app/
│   ├── main.py            # Entrypoint FastAPI
│   ├── models/            # Modelos carregados (Torch/Pickle)
│   ├── processors/        # Lógica de limpeza de texto/imagem
│   └── routers/           # Rotas da API
├── requirements.txt
└── Dockerfile
```

### Implementação Básica (`main.py`)

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import random # Substituir por inferência real

app = FastAPI(title="Risk Guardian AI Engine")

class ScanRequest(BaseModel):
    text: str
    url: str | None = None

class ScanResult(BaseModel):
    risk_score: float
    ai_probability: float
    verdict: str
    entities: list[str]

@app.post("/predict", response_model=ScanResult)
async def predict_risk(request: ScanRequest):
    # 1. Carregar modelo (ex: BERT fine-tuned)
    # 2. Pré-processar texto
    # 3. Inferência
    
    # Simulação:
    risk_score = random.uniform(0, 100)
    ai_prob = random.uniform(0, 100)
    
    verdict = "REAL"
    if risk_score > 75:
        verdict = "FAKE"
    elif risk_score > 50:
        verdict = "UNVERIFIED"
        
    return {
        "risk_score": risk_score,
        "ai_probability": ai_prob,
        "verdict": verdict,
        "entities": ["entity1", "entity2"]
    }

@app.get("/health")
def health_check():
    return {"status": "online", "gpu_available": False}
```

### Integração NestJS -> Python

No serviço `ScanService` do NestJS, utilize o `HttpModule` para chamar o serviço Python:

```typescript
// scans.service.ts (Exemplo Conceitual)
async analyzeContent(text: string) {
  const aiResponse = await this.httpService.axiosRef.post('http://ai-engine:8000/predict', {
    text: text
  });
  
  return {
    riskScore: aiResponse.data.risk_score,
    verdict: aiResponse.data.verdict
    // ... mapear outros campos
  };
}
```

---

## 🔄 Fluxo de Desenvolvimento Local (Full-Stack)

Para rodar todo o ecossistema localmente, recomenda-se o uso do Docker Compose.

**`docker-compose.yml` (Exemplo)**:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: riskguardian
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://user:password@postgres:5432/riskguardian
      AI_SERVICE_URL: http://ai-engine:8000
    depends_on:
      - postgres
      - ai-engine

  ai-engine:
    build: ./ai-engine
    ports:
      - "8000:8000"

  frontend:
    build: ./frontend
    ports:
      - "5000:5000"
```

## 📚 Documentação Adicional

*   **API Specs**: A especificação OpenAPI (Swagger) será gerada automaticamente pelo NestJS em `/api/docs`.
*   **Modelos de IA**: A documentação dos modelos (acurácia, datasets de treino) deve ser mantida na pasta `ai-engine/docs`.
