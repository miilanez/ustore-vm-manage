# Desafio: Criação de Interface Web em Angular para Gestão e Monitoramento de Máquinas Virtuais

Este projeto tem como objetivo desenvolver uma interface web em Angular para a gestão e monitoramento de máquinas virtuais. A aplicação inclui quatro telas principais: login, dashboard, cadastro de máquina virtual e listagem de máquinas virtuais.

## Funcionalidades Implementadas

### 1. Tela de Login

- **Email do usuário**: Campo do tipo email, com validação para o formato de um email.
- **Senha**: Campo do tipo password.
- **Botão de login**: Envia as credenciais e tenta o login. Em caso de sucesso, redireciona para a tela de dashboard. Em caso de falha, exibe uma mensagem informando que as credenciais estão inválidas.

### 2. Tela de Dashboard

- **Gráfico de Barra**: Exibe a quantidade total de VMs categorizadas por status.
- **Gráficos de Pizza**: Exibe o total de VMs versus o limite de VMs.
- **Informativo**: Mensagem de boas-vindas e um resumo sobre o portal.

### 3. Tela de Listagem de Máquinas Virtuais

- **Botão de adicionar**: Redireciona para a tela de cadastro de VMs.
- **Tabela**: Lista todas as VMs cadastradas com colunas para nome, CPU, memória (RAM), status e ações.
- **Ações**: Botões para iniciar, pausar, parar e excluir VMs. Cada ação altera o status da VM selecionada e exibe uma mensagem informando o usuário sobre a ação.

### 4. Tela de Cadastro de Máquina Virtual

- **Botão de voltar**: Retorna para a tela de listagem de máquinas virtuais.
- **Campo de nome**: Campo de texto obrigatório com no mínimo 5 caracteres.
- **Campo de memória**: Campo numérico obrigatório, exibido em GB.
- **Campo de tamanho da CPU**: Campo numérico obrigatório, aceita apenas números inteiros.
- **Botão de cadastrar**: Insere uma nova VM no array, salva no LocalStorage e define o status como RUNNING.

## Decisões de Design

- **Interface**: Optei por uma interface mais minimalista com foco nas funcionalidades da aplicação, privilegiando as cores claras, o azul e laranja, baseados na logo da Ustore;
- **Validação de Formulários**: Utilizei as validações embutidas do Angular para garantir que os dados inseridos nos formulários são válidos.
- **Armazenamento**: Utilizei o LocalStorage para armazenar e recuperar as informações das VMs.
- **Estilização**: CSS/SCSS foi utilizado para estilizar a interface, garantindo um design limpo e responsivo.
- **Responsividade**: A interface foi projetada para ser simples e adaptável a diferentes tamanhos de tela, incluindo desktops/notebooks e tablets.
- **Biblioteca de Gráficos**: A biblioteca Chart.js foi utilizada para a criação dos gráficos na tela de dashboard e o Font Awesome para estilizar o botão de retorno.

## Funcionalidades Faltantes

- **Autenticação Real**: A tela de login atualmente valida as credenciais de forma mockada. A integração com um sistema de autenticação real ainda precisa ser implementada.
- **Componentização Completa**: A aplicação possui a utilização de vários elementos que se repetem em várias telas. Por problemas que não consegui corrigir em tempo, a componentização de alguns elementos não está completa.

## Dificuldades Encontradas

- **Conhecimento da linguagem**: Precisei de mais tempo para entender como funciona a estrutura do Angular, assim como os seus processos de configuração.
- **Versão do Angular**: Mesmo dentro da versão 17, houveram atualizões recentes em que o Angular passou a utilizar componentes standalone, modificando também outros arquivos da estrutura básica da linguagem como modulos e rotas. Isso trouxe maior dificuldade para entender como declarar dependências e tornar os componentes funcionais.
- **Validação de Formulários**: A configuração das validações para garantir a correta inserção dos dados nos formulários foi um desafio inicial.
- **Manipulação de Estados**: Gerenciar os diferentes estados das VMs (RUNNING, PAUSED, STOP) e as transições entre eles foi complexo, especialmente na interface de listagem, pois não encontrei pacotes de gerenciamento de estados como o "useState" do React. Para isso, busquei bibliotecas externas como o "NGRX", mas optei por utilizar soluções mais simples embutidas do Angular.

## Configuração e Execução

### 1. Clone o repositório:

```bash
git clone https://github.com/miilanez/ustore-vm-manage.git
```
### 2. Instale as Dependências:

```bash
npm install
```
### 3. Execute o servidor de Desenvolvimento:

```bash
ng serve
```

## Live Demo

Também disponibilizei a aplicação em live demo na plataforma Vercel:
