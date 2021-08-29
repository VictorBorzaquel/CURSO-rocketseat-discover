git pull (pegar alterações no github)
git clone


<!-- Criar SSH -->
ssh-keygen -t rsa -b 4096 -C "victorborzaquel@outlook.com"
rsa = tipo da incriptação
4096 = força da incriptação




…or create a new repository on the command line
echo "# COURSE-rocketseat-discover" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:VictorBorzaquel/COURSE-rocketseat-discover.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin git@github.com:VictorBorzaquel/COURSE-rocketseat-discover.git
git branch -M main
git push -u origin main