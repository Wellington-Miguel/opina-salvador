var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(classStar.contains('star-icon')){
    var parentService = e.target.closest('.servico-iten');
    var stars = parentService.querySelectorAll('.star-icon');
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    var avaliacao = e.target.getAttribute('data-avaliacao');
    console.log(avaliacao);
  }
});

function formatarCPF(campo) {
  campo.maxLength = 14;
  campo.value = campo.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
}

window.onload = function() {
  var camposCPF = document.querySelectorAll('input[name="cpf"]'); 

  camposCPF.forEach(function(campo) {
      campo.addEventListener('input', function() {
          formatarCPF(campo);
      });
  });
};

function abrirModal() {
  var modal = document.getElementById('modalAvaliacao');
  modal.style.display = 'block';
}

function fecharModal() {
  var modal = document.getElementById('modalAvaliacao');
  modal.style.display = 'none';
}
