# cypress-discovery

Interface de linha de comandos com Hyper e Gitbash

Nesse vídeo quero mostrar como instalar o Gitbash e integrar ao Hyperjs. Uma ótima solução para trabalhar simulação de comandos Linux no Windows.

https://hyper.is/?_gl=1*s6a6mn*_ga*OTI0NDI4NDA4LjE2NDU1NzI2ODA.*_ga_37GXT4VGQK*MTY0NTU3Mjk2OS4xLjEuMTY0NTU3Mjk5NC4w

https://gitforwindows.org/?_gl=1*s6a6mn*_ga*OTI0NDI4NDA4LjE2NDU1NzI2ODA.*_ga_37GXT4VGQK*MTY0NTU3Mjk2OS4xLjEuMTY0NTU3Mjk5NC4w

Cypress framework em java script que foi feito de dev front endend p/ dev font end

É multi plataforma
Versão 16.13.0 LTS o melhor para instalar é o 14.


/c/qaninja/cypress-discovery
 mkdir buger-eats

/c/qaninja/cypress-discovery/buger-eats
npm init

Depois começa a responder as perguntas
confirma com yes
será criado o package.json

escrever code . e pressionar enter abri o visual studio code
instalar o cypress

 npm i cypress --save-dev

Para abrir a interface grafica do cypress-> npm run test

Dentro da pasta do cypres -> integration -> excluir o get-started e o advanced examples



----------------------------------------------------------------------------
 ////****Aula - Upload de arquivos ****////

Mover o arquivo do upload para a pasta: fixtures
No GitBash no projeto -> Instalar o cypress-file-upload: npm install cypress-file-upload --save-dev

Será criado a dependencia - cypress-file-upload

Na pasta support importar o modulo na subpasta-> index.js, depois do import './commands' colocar o import '.cypress-file-upload'

Na pasta de cadastro criar nova suite de cadastro



