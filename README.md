# CRUD com Angular e Spring criada com:

- Angular CLI: 15.2.9
- Node: 18.16.0
- Package Manager: npm 9.5.1
- @angular-devkit/architect       0.1502.9
- @angular-devkit/build-angular   15.2.9
- @angular-devkit/core            15.2.9
- @angular-devkit/schematics      15.2.9
- @schematics/angular             15.2.9
- rxjs                            7.8.1
- typescript                      4.9.5
- Angula Material: 15.2.9 
- Visual studio code
- Sublime Text

Aplicação Web com a responsabilidade de acessar uma Interface de Programação de Aplicação (API) criada com Java no BACK-END. O  usuário realizar login com Spring Security com JWT (leia README do projeto APISERVE) para entender o requisitos não funcionais usados e implementação de código).

# Guard Auth 

Verifica as Rotas com guarda de autorização com valor correspondente.

# Interceptor Auth

Recupera o token do usuário cadastrado. Caso, o status for 401 retorna a página de login; status for 403 forbidden.

# Services

user-auth: implementa métodos set e get de papéis (ROLES) do JWTTOKEN.

user: implementa endpoint para o usuário realizar autenticação e permissão de painel para usuário e admin. O método roleMatch verifica se achou a role do usuário.

# Componente admin

Menu com rotas que o usuário com papel Admin pode acessar.

# Componente forbidden

Informa que o usuário não tem permissão para acessar a página.

# Componente header 

Botão com ação de está logado e caso, o usuário deseja deslogar é redirecionado para tela de login.

# Componente home

Página inicial da aplicação.

# Componente login

Formulário responsável por submeter os dados e através do serviço verificar a role, o token e redirecionar o usuário para a rotar permitida. 

# Modelo Produto

Implementa um CRUD de produto com operações de GET, POST, DELETE.

# Componente produto

Invoca em uma DIV o componente app-produtos-list (produtos-list), responsável por listar os produtos da base de dados. Cada item da lista ter a responsabilidade de adicionar, editar ou remover um produto.

produtos-list: componente populado com dados do produto e operações de cada item da lista. Cada método da operação usa o EventEmitter para saída do evento (este evento com a ação é recuperado no componente renderizado). 

produto-form: formulário com a responsabilidade de submeter os dados para persistência na base de dados. o serviço invoca o endipoint SALVAR quei vai no BACK-END e realiza a persistência.

# Guarda-rota

produto resolver: usa o ActivatedRouteSnapshot com Observable caso, a rota seja de editar ou de novo produto. 

# Shared

Compartilhada no app-material-module os imports global do material para toda a aplicação. 
