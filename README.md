**Greed_MinimumChange** 
# MinimumChange

**Número da Lista**: Dupla 4<br>
**Conteúdo da Disciplina**: Greed<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0028685  |  Victor Samuel dos Santos Lucas |
| 17/0115500  |  Vinícius Vieira de Souza |

## Sobre 
Este projeto tem como objetivo servir como base para implementação de algoritmos relacionados a estudos voltados ao conteúdo de algoritimos gulosos, também chamados de Greed.

O projeto em questão se trata de uma aplicação onde através da implementação do algoritmo do "trocador" será feito um calculo sobre a menor quantidade de moedas necessárias para retornar o valor de troco desejado. Desse modo a aplicação apresenta uma área onde o usuário deverá entrar com o valor de troco. Feito isso este deverá clicar no botão de busca para que o calculo seja realizado. Terminado o procedimento é informado as menores quantidade de moedas a serem entregues considerando os tipos (1 centavo, 5 centavos, 10 centavos, 25 centavos, 50 centavos e 100 centavos). 

OBS: O usuário deverá informar o valor já convertido para centavos. Exemplo: R$1.00 deverá ser informado como 100, R$2.00 deverá ser informado como 200 e assim por diante.

## Screenshots
Adicione 3 ou mais screenshots do projeto em funcionamento.

## Instalação 
**Linguagem**:  Python (Backend) / Javascript (Frontend)<br>
**Framework**: Flask (Backend) / React (Frontend)<br>
Descreva os pré-requisitos para rodar o seu projeto e os comandos necessários.

### Requisitos:
- Python: Versão 3+
- Node: Versão 16+
- Npm: Versão 6+

## Uso 
### Passo 0:
No diretório raiz do projeto instale as dependências necessárias para o backend com: 
```sh
pip3 install -r backend/src/requirements.txt
```
### Passo 1:
No diretório raiz do projeto, execute:
```sh
export FLASK_APP=backend/src/app.py
```
### Passo 2:
Coloque o backend em execução com:
```sh
flask run
```
### Passo 3: 
Em outro terminal, abra o projeto no diretório /frontend e instale o pacote de dependências do frontend com:
```sh
npm install
```
### Passo 4:
Coloque o frontend em execução com:
```sh
npm start
```
### Passo 5:
Caso não abra automáticamente, para acessar a aplicação abra seu navegador no seguinte endereço: http://localhost:3000

## OBS:
- O backend e frontend fazem uso respectivamente das portas:  http://localhost:5000 e http://localhost:3000, dessa forma certifique-se de que estejam livres para rodar a aplicação.




