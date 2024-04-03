<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Alerta em JavaScript</title>
</head>
<body>

<h1>Exemplo de Alerta em JavaScript</h1>

<!-- Botão para acionar o alerta -->
<button onclick="mostrarAlerta()">Clique aqui</button>

<script>
    // Função para exibir o alerta
    function mostrarAlerta() {
        alert("Bem-vindo!");
    }
</script>

</body>
</html>


Atividade
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Alerta em JavaScript</title>
</head>
<body>

<h1>Exemplo de Alerta em JavaScript</h1>

<!-- Botão para acionar o alerta -->
<button onclick="mostrarMensagem()">Clique aqui</button>

<script>
    // Função para exibir o alerta com a mensagem desejada
    function mostrarMensagem() {
        alert("Atividade Julia e Endrik");
    }
</script>

</body>
</html>



<!DOCTYPE html>
<html>
	<body>

		<h1>The Document Object</h1>
			<h2>The getElementById() Method</h2>

		<p id="demo"></p>

		<script>
			document.getElementById("demo").innerHTML = "Hello World";
		</script>

	</body>
</html>

<!DOCTYPE html>
<html>
	<body>

		<h1>The Document Object</h1>
			<h2>The getElementsByTagName() Method</h2>

		<p>Essa é uma de:</p>
		<ul>
		  <li>Café</li>
		  <li>Chá</li>
		  <li>Leite</li>
		</ul>

		<p>The innerHTML of the second li element is:</p>
		<p id="demo"></p>

		<script>
			const collection = document.getElementsByTagName("li");
			document.getElementById("demo").innerHTML = collection[1].innerHTML;
		</script>

	</body>
</html>

<!DOCTYPE html>
<html>
	<body>

		<h1>The Document Object</h1>
		<h2>The getElementsByClassName() Method</h2>

		<p>Change the text of the first element with class="example":</p>

		<div class="example">Element1</div>
		<div class="example">Element2</div>

		<script>
			const collection = document.getElementsByClassName("example");
			collection[0].innerHTML = "Hello World!";
		</script>

	</body>
</html>


<!DOCTYPE html>
<html>
	<body>
		<h1>The Document Object</h1>
		<h2>The querySelector() Method</h2>

		<h3>Add a background color to the first p element:</h3>
		<p>This is a p element.</p>
		<p>This is a p element.</p>

		<script>
			document.querySelector("p").style.backgroundColor = "red";
		</script>

	</body>
</html>

<!DOCTYPE html>
<html>
		<body>
		<h1>The Document Object</h1>
		<h2>The querySelectorAll() Method</h2>

		<p>Add a background color all elements with class="example":</p>
		<h2 class="example">A heading</h2>
		<p class="example">A paragraph.</p> 

		<script>
			const nodeList = document.querySelectorAll(".example");
			for (let i = 0; i < nodeList.length; i++) {
			  nodeList[i].style.backgroundColor = "red";
			}
		</script>

	</body>
</html>


<!DOCTYPE html>
<html>
	<body>
		<h1>HTML DOM Events</h1>
			<h2>The onmouseover Event</h2>

			<img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="img/emoji.gif" alt="emoji" width="32" height="32">

			<p>A função bigImg() é acionada quando o usuário move o ponteiro do mouse sobre a imagem.</p>
			<p>A função normalImg() é acionada quando o ponteiro do mouse é movido para fora da imagem.</p>

			<script>
				function bigImg(x) {
				  x.style.height = "64px";
				  x.style.width = "64px";
				}

				function normalImg(x) {
				  x.style.height = "32px";
				  x.style.width = "32px";
				}
		</script>

	</body>
</html>

<!DOCTYPE html>
<html>
	<body>
		<h1>HTML DOM Events</h1>
			<h2>The focus Event</h2>

			Digite seu nome: <input type="text" onfocus="myFunction(this)">

			<p>Quando o campo de entrada recebe foco, uma função altera a cor do plano de fundo.</p>

			<script>
				function myFunction(x) {
				  x.style.background = "yellow";
				}
			</script>
	</body>
</html>


<!DOCTYPE html>
<html>
	<body>

		<p>Selecione algum brinquedo da lista</p>

			<select id="mySelect" onchange="myFunction()">
			  <option value="Boneca">Boneca</option>
			  <option value="Bola">Bola</option>
			  <option value="Dado">Dado</option>
			  <option value="Carrinho">Carrinho</option>
			</select>

		<p>Quando você seleciona um brinquedo novo, uma função é acionada que emite o valor do brinquedo selecionado.</p>

		<p id="demo"></p>

		<script>
			function myFunction() {
			  var x = document.getElementById("mySelect").value;
			  document.getElementById("demo").innerHTML = "Voce selecionou: " + x;
			}
		</script>

	</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplos de Funções JavaScript</title>
    <!-- Adicionando link para o Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .btn-custom {
            background-color: #ADD8E6;
            border-color: #ffb6c1;
            color: #000000;
        }
        .btn-custom:hover {
            background-color: #B0C4DE;
            border-color: #ff99b9;
            color: #000000;
        }
    </style>
</head>
<body>
 
    <!-- Função Nomeada -->
    <button class="btn btn-custom" onclick="saudacao()">Clique aqui para saudar</button>
 
    <!-- Função Nomeada com argumento e retorno -->
    <p id="resultadoSoma"></p>
    <button class="btn btn-custom" onclick="exibirSoma()">Clique aqui para exibir soma</button>
 
    <!-- Função com Construtor -->
    <p id="infoPessoa"></p>
    <button class="btn btn-custom" onclick="exibirInfoPessoa()">Clique aqui para exibir informações da pessoa</button>
 
    <!-- Função Literal (variável) -->
    <button class="btn btn-custom" onclick="minhaFuncao()">Clique aqui para executar função literal</button>
 
    <!-- Função de Flecha -->
    <p id="resultadoSomaArrow"></p>
    <button class="btn btn-custom" onclick="exibirSomaArrow()">Clique aqui para exibir soma (função de flecha)</button>
 
    <!-- Adicionando link para o Bootstrap JS no final do body para melhor desempenho -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
 
    <script>
      // Função Nomeada
      function saudacao() {
        alert("Ola, está é uma função saudacao");
      }
     
      // Função Nomeada com argumento e retorno
      function soma(a, b) {
        return a + b;
      }
     
      function exibirSoma() {
        var resultado = soma(9, 4);
        document.getElementById("resultadoSoma").innerHTML = "O resultado da soma é: " + resultado;
      }
     
      // Função com Construtor
      function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
      }
     
      var pessoa1 = new Pessoa("João", 45);
      
      function exibirInfoPessoa() {
        document.getElementById("infoPessoa").innerHTML = pessoa1.nome + " tem " + pessoa1.idade + " anos.";
      }
     
      // Função Literal (variável)
      var minhaFuncao = function() {
        alert("Esta é uma função literal.");
      };
     
      // Função de Flecha
      var somaArrow = (a, b) => a + b;
     
      function exibirSomaArrow() {
        var resultadoArrow = somaArrow(6, 7);
        document.getElementById("resultadoSomaArrow").innerHTML = "O resultado da soma é: " + resultadoArrow;
      }
    </script>
 
</body>
</html>


<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Contador de Cliques</title>
	</head>
			<body>
			<button id="contadorBtn">Clique Aqui!</button>
			<p id="contador">0</p>
	
		<script src="script.js"></script>
	</body>
</html>

<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Converter para Caixa Alta</title>
	</head>
			<body>
			<h2>Converter para Caixa Alta</h2>

		<input type="text" id="inputString" placeholder="Digite uma string">
			<button onclick="converterParaCaixaAlta()">Converter</button>

			<p id="resultado"></p>

		<script src="scripts.js"></script>
	</body>
</html>


<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Soma de Números</title>
	</head>
		<body>
			<h2>Soma de Números</h2>

				<input type="number" id="numero1" placeholder="Digite o primeiro número">
				<input type="number" id="numero2" placeholder="Digite o segundo número">
				<button onclick="calcularSoma()">Calcular Soma</button>

				<p id="resultado"></p>

			<script src="scriptss.js"></script>
		</body>
</html>

