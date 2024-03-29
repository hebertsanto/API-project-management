### API para gerenciamento de projetos

[![Build Status](https://github.com/ErickWendel/testing-serverless-apps/workflows/Docker%20Actions/badge.svg)](https://github.com/ErickWendel/testing-serverless-apps/actions)

### descrição do projeto

Este é em princípio um projeto muito desafiador pois envolve muitas tabelas e muitos relacionamentos,
desenvolvido desde o início, começando pela modelagem de dados, logo depois chegou a hora de escolher as tecnologias,
Optei por desenvolver com nestjs por ser robusto e por querer aprender mais sobre ele, utilizei Postgres como banco de dados.

### tecnologias usadas

- **Nest js** -framework baseado em node js.
- **typescript** - por padrão o nest já vem com typescript.
- **Prisma** - ORM para banco de dados relacionais.
- **Postgres** - banco de dados relacional.
- **Docker** – containers para subir o banco de dados
- **Husky** - para rotina de commit, por exemplo. antes de fazer um commit, execute os testes ou formate o código.
- **Prettier** - para formatar o código e seguir um padrão ao longo do projeto
- **dbdiagram** - Usei este software para modelar os dados.

### modelagem do sistema
![modelagem-sistema](https://github.com/hebertsanto/API-project-management/assets/108555424/5b154751-4d69-4624-80c3-67442052ea0b)

## fucionalidades do sistema

### autenticação / segurança

- [x] criptografar senhas dos usuários
- [x] enviar email para confirmação da conta
- [x] validar confirmação do email com token e alterar status no banco de dados

### usuário

- [x] é possivel criar uma conta
- [x] é possivel encontrar uma conta pelo ID
- [x] é possivel apagar uma conta

### perfil

- [x] é possivel ter um perfil
- [x] é possivel encontrar um perfil pelo ID

### projetos

- [x] usuário pode criar um projeto
- [x] usuário pode listar um projeto pelo ID
- [x] usuário pode listar todos os seus projetos
- [x] usuário pode apagar um projeto
- [x] usuário pode seguir projetos
- [x] usuário pode deixar de seguir projetos

### questões de projetos

- [x] usário pode adicionar questões para determinado projeto
- [x] usuário editar questões de determinado projeto
- [x] usuário pode apagar questões de um determinado projeto
- [x] usuário pode listar todas as suas questões criadas
      
### objetivos de projetos

- [x] usário pode adicionar objetivos para determinado projeto
- [x] usuário editar objetivos de determinado projeto
- [x] usuário pode apagar objetivos de um determinado projeto
- [x] usuário pode listar todos os seus ojetivos criados

### decisões de projetos

- [x] usuário pode adicionar decisões a determinado projeto
- [x] usuário pode atualizar decisões a determinado projeto
- [x] usuário pode apagar decisões a determinado projeto
- [x] usuáriio pode listar uma decisição pelo ID
- [x] usuário pode listar todas as suas decisões

### atualizações de projetos

- [x] usuário pode adicionar atualizações a determinado projeto
- [x] usuário pode editar atualizações a determinado projeto
- [x] usuário pode apagar atualizações a determinado projeto
- [x] usuáriio pode listar uma atualização pelo ID
- [x] usuário pode listar todas as suas atualizações
      
### times 

- [x] usuário pode criar um time
- [x] usuário pode listar um time pelo ID
- [x] usuário pode apagar um time
- [x] usuário pode editar dados de um time

### relações

este é um projeto onde existem varias relações oque é muito legal, além de ser desafiador, você obtem muito aprendizado
com banco de dados relacionais.

voce pode ver todas as relações no arquivo schema.prisma, 
também disponibilizei um diagrama onde estão todas as tabelas e relacionamentos.


### conclusão

está sendo um projeto desafiador e bom pra minha evolução como desenvolvedor, estou enfrentando diversos
desafios, resolvendo eles e adquirindo muitos conhecimentos.

### contato

**email**: hebertsantosdeveloper@gmail.com

**linkedin**: [https://www.linkedin.com/in/hebert-santos-241429243/](https://www.linkedin.com/in/hebert-santos-241429243/)

**site** : [https://ihebert.vercel.app/](https://ihebert.vercel.app/)

  
