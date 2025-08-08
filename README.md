<h1 align="center">API Hamburgueria</h1>

<p align="center">
  <b>API REST para gerenciamento de produtos, clientes e comandas</b><br>
  Desenvolvida com <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong> e <strong>Swagger</strong>.
</p>

<hr>

<h2>Instalação</h2>

<p>Clone o repositório e instale as dependências:</p>

```bash
# Clonar
git clone https://github.com/Jcvanz/trabalho_furb

# Abrir a pasta
cd trabalho_furb

# Instale as dependências
npm install

# Abra o VScode
code .
```

<hr> <h2>🚀 Como rodar a aplicação</h2>

```bash
node src/index.js
```

<p>Certifique-se de ter o arquivo <code>.env</code> configurado com sua conexão MongoDB:</p>

```bash
SECRET_API="string_de_conexao_mongodb"
PORT=3000
```

<hr> <h2>Documentação com Swagger</h2> <p>Após iniciar a aplicação, acesse:</p>

```bash
http://localhost:3000/api-docs
```


<p>O Swagger mostrará todos os endpoints disponíveis da API, permitindo testar as requisições diretamente pelo navegador.</p> <hr> <h2>Tecnologias utilizadas</h2> <ul> <li>Node.js</li> <li>Express</li> <li>MongoDB + Mongoose</li> <li>Swagger UI Express</li> <li>dotenv</li> </ul> <hr> <h2>Estrutura da API</h2> <table> <tr> <th>Recurso</th> <th>Descrição</th> </tr> <tr> <td><b>/produtos</b></td> <td>Gerencia produtos do cardápio</td> </tr> <tr> <td><b>/clientes</b></td> <td>Gerencia clientes da hamburgueria</td> </tr> <tr> <td><b>/comanda</b></td> <td>Gerencia pedidos/comandas</td> </tr> </table> <hr> <h2>📖 Referências</h2> <ul> <li><a href="https://expressjs.com/">Documentação Express</a></li> <li><a href="https://mongoosejs.com/">Documentação Mongoose</a></li> <li><a href="https://swagger.io/">Documentação Swagger</a></li> </ul> ```

