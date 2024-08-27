  const mostrarResultado = (texto) => {
    const imagenEncriptar = document.getElementById('imagenEncriptar');
    const txtMensaje = document.getElementById('txtMensajeEncriptar');
    const txtMensajeI = document.getElementById('txtMensajeEncriptarI');
    const txtResultado = document.getElementById('txtResultado');

    imagenEncriptar.style.display = 'none';
    txtMensaje.style.display = 'none';
    txtMensajeI.style.display = 'none';
    txtResultado.style.display = 'block';
    txtResultado.textContent = texto;
  };

  //Función para encriptar texto 

  function encriptar() {
    const txtEncriptar = document.getElementById('txtEncriptar');
    const texto = txtEncriptar.value.toLowerCase();
    
    const llaves = {
      e: 'enter',
      i: 'imes',
      a: 'ai',
      o: 'ober',
      u: 'ufat'
    };

    const textoEncriptado = texto.replace(/([eiaou])/g, (match) => llaves[match])
    //limpiarResultado();
    mostrarResultado(textoEncriptado);
  }

  
  //Funcion para desencriptar
  function desencriptar(){
    const txtEncriptar = document.getElementById('txtEncriptar');
    const texto = txtEncriptar.value.toLowerCase();
    const llaves = {
      enter: 'e',
      imes: 'i',
      ai: 'a',
      ober: 'o',
      ufat: 'u'
    };
    textoDesencriptado = texto.replace(/(enter|imes|ai|ober|ufat)/g, (match) => llaves[match]);
    mostrarResultado(textoDesencriptado);
  }

  //Funcion para copiar 
  function copiarTexto(){
    const texto = document.getElementById('txtResultado').textContent;
    navigator.clipboard.writeText(texto);
  }
  
  //Funcion para borrar cada vez que se hace clik 
  function limpiarResultado(){
    const txtResultado = document.getElementById('txtResultado');
    txtResultado.value = '';
  }