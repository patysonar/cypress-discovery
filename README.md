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

----------------------------------------------------------------------------
 ////****Aula - Cypress Run com evidências em videos ****////
 
 npx cypress run   ->> diferente do open que abri a interface grafica e o run executa todos os cenarios em background ele abri e executa tudo.
 E ainda cria o video de teste.


----------------------------------------------------------------------------
 ////****Aula - Executando em outros navegadores ****////
 
 No cypress o navegador é o Electron -> é uma WEb view usada por dev para faze implementação desktop embarcada (HTML, Java Script e CSS)
 
 O visual studio code - é uma aplicação web tudo feito (HTML, Java Script e CSS) dentro de um ambiente node. Basicamente é o Electron embarcado, está dentro do Electron.
// npx cypress run -b chrome ->  executa o teste automatizado no chrome
 // npx cypress run -b edge ->  executa o teste automatizado no edge - novo
 // npx cypress run -b electron ->  executa o teste automatizado no electron
 // npx cypress run -b firefox ->  executa o teste automatizado no firefox 
 // npx cypress run -b chromium ->  executa o teste automatizado no chromium
 
 ----------------------------------------------------------------------------
 ////****Aula - Publicando o projeto no Github ****////
 
 Repositório:
https://github.com/weareqaninja/buger-eats-cypress-discovery
 
 
  ----------------------------------------------------------------------------
 ////****Aula - Cypress Dashboard ****////
 
 No cypres criar um projeto para poder ver os resultados online.
 Irar gerar dois codigos 1 para por no projeto e o outro para na hora de executar ele entender e armazenar.
 
com o segundo codigo criar um arquivo temporadio exemplo: temp.txt -> e colocar o segundo codigo.
 
 
  ////****Aula - Github Actions do ZERO ao Report****////
  
  No Github acessra o projeto e navegar na aba actions
  clicar no link referente a  -> set up a workflow yourself 
  Renomear o nome do arquivo yml
  Apagar todo conteudo do arquivo
  pesquisar no marketplace cyprees o oficial
  Montar o arquivo do cypress
  temos um arquivo zip pronto.-> workflow-cypress.zip
  Em settings criar uma chave secreta para o comando:  wait-on: ${{ secrets.BASE_URL }} informar a URL. -> será criada a variavél
  Fazer o mesmo processo para a chave secreta de gravação -> CYPRESS_RECORD_KEY -> é neste momento que em value é colocada o segundo codigo gerado no dashboard do cypress
  No actions salvar o arquivo e clicar no -> Cypress Regression Tests
  Obs: Para verificar se realmente funcionou o dashboard do cypress precisei separar o projeto: buger-eats-qa_page_objects para poder rodar da raiz: Funcionou e deu Certo.
  
   
  
  
  Código da aula
https://github.com/weareqaninja/buger-eats-cypress-discovery


  
  

 
 
 
 
 
 
