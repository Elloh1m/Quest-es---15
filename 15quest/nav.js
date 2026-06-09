// Marca o link ativo com base no arquivo atual
(function(){
  const page = location.pathname.split('/').pop() || 'q1.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(a.getAttribute('href') === page) a.classList.add('active');
  });
})();
