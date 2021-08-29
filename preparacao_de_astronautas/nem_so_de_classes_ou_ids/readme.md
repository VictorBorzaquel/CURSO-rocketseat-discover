
```css
/* Qualquer filho */
div ul li { }

/* Apenas filho direto */
div > ul > li { }

/* Qualquer irmão */
div ~ button { }

/* Apenas irmão direto */
div + button { }
```
```css
/* Pegar o primeiro item p dentro da div */
div p:nth-of-type(1) { }

/* separa os filhos, e se o p for o primeiro pega ele */
div p:nth-child(1) { }

/* pegar todos os itens com indice impar */
div:nth-child(odd) { }

/* pegar todos os itens com indice par */
div:nth-child(even) { }
```
```css
[class] { }

[class="red"] { }

#red { }

.red { }

.red::first-child { }

/* Pseudo-Class */
.red:hover { }

input:focus { }

input:disabled { }

input:required { }
```

```css
/* Pseudo-Element */
li::before { content: '' }

li::after { content: '' }

p::first-line { }
```