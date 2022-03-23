# My Wallet
O My wallat é um app que simula transações bancárias, a ideia é ele ser um projeto pra praticar o uso de testes automatizados, tanto de integração quanto de unidade.

# Instalação e Preparação
Pra instalar o projeto basta fazer o clone deste repositório. Nos arquivos tem um `.env.example`, mostrando quais variáveis de ambiente devem ser configuradas.

## Tipos de ENV
O projeto roda com 3 tipos de arquivo .env, sendo eles:
- `.env`: Arquivo destinado ao servidor de produção
- `.env.dev`: Arquivo destinado ao ambiente de desenvolvimento
- `env.test`: Arquivo destinado a execução de scripts de testes automatizados.

É importante criar os envs corretos, caso contrário o projeto apresentará erros.