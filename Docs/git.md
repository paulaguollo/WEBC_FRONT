Comandos Git (titulo principal)

git --version git init

Configuração de utilizador (subtítulo)

git config --global user.name "Paula"
git config --global user.email "paula@gmail.com"
Comandos (subtítulo)

git init → Inicia o repositório
git status → Verifica o estado do repositório
git add NOMEFICHEIRO → Adiciona um ficheiro específico ao repositório
git commit -m "MENSAGEM" → cria ponto no controlo de versões do repositório com os ficheiros adicionados
git commit -am "MENSAGEM" → cria um commit e adiciona os ficheiros modificados já adicionados a um commit anterior do repositório (git add . + git commit)
git log → mostra as informações de todos os commit feitos
git show CODIGOCOMMIT→ apresenta as alterações efetuadas no commit do código fornecido
git show → apresenta as alterações efetuadas no último commit
git branch NOME → cria uma branch
git branch → mostra as branch existentes
git checkout NOME → troca para a branch NOME
git merge NOME → estando numa branch acrescenta as funcionalidades da branch NOME à atual
git branch -D NOME → elimina a branch NOME