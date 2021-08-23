git init
ls -a
git help
git config --list
git config --global (update all computer)
cat ~/.gitconfig (view all config computer)
cat .git/config (view all config project)

git add .
git add *.md (add all .css files)
git commit -m ""
git push
git fetch


git diff (view all modified inside the files)
git diff --staged (view all modified in stage area inside the files)
git diff --color-words (ver apenas pelavras modificadas)

git show <rash> (view modificações do commit)
git show <rash> --color-words (ver apenas pelavras modificadas)
git show <rash> -- <directory> (ver apenas modificações do arquivo)
git show <rash> -- <directory>/* (ver apenas modificações do diretorio)

git rm <file>
git rm --cached

git restore --staged
git reset HEAD . ()

git revert HEAD~5 (voltar 5 commits)
git revert <rash> (voltar até o commit expecificado)


git commit --amend -m "" (change HEAD message and change add files)(last commit)
git commit -am "" (se não tiver adicionado nenhum arquivo novo, só modificado os que já tem)

git checkout <rash> -- <file> (pegar um arquivo de um commit anterior)(add automaticamente no staged)
git restore --staged <file> (falar que arquivo não vai entrar no commit)

git mv <fileName> <newFileName> (rename and move file)

git clean -n (view delete files)
git clean -f (delete all Working Directory files)

git status (view current stage area)
git rm --cached <file> (remove file from stage area and return working directory)

git log (list all commits)
git log --oneline (apenas a message do commit)
git log -n 5 (list lasts 5 commits)
git log --since=2020-10-01 (apenas commits depois da data)
git log --until=2020-10-01 (apenas commits antes da data)
git log --author=VictorBorzaquel (apenas commits de um author)
git log --grep="init" (usar expressão regular para achar commits pelas messages)

<!-- Remover arquivos caso coloque no .gitignore depois de fazer um commit -->
git rm -r --cached
git add .
git commit -m "using .gitignore"
<!--  -->



vim

:q fechar
:q! fechar sem salvar
:wq salvar e fechar

:i (insert text)

terminal

ctrl + shift + T = nova aba terminal

rm removed
mkdir create directory
touch create file
><file> create file and eddit text (ctrl + D to exit)
pwd (view current directory)


-f forced
-r recursive

-g all
