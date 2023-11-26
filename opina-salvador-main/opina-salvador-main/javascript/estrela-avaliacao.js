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



