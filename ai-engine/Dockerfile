# Usa uma imagem base Python com foco em desempenho
FROM python:3.11-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo de requisitos e instala as dependências
# Isso é feito primeiro para otimizar o cache do Docker
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da aplicação (incluindo main.py e a pasta ml/)
COPY . .

# Expõe a porta que o Uvicorn/FastAPI usará
EXPOSE 8000

# Comando para iniciar o servidor Uvicorn/FastAPI
# --host 0.0.0.0: Essencial para aceitar conexões de outros serviços (como o NestJS)
# main:app: Onde 'main' é o arquivo e 'app' é a instância do FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]