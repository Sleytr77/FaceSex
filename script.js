const images = [
  { src: 'imagens/img1.jpg', name: 'Rhianna', score: 0 },
  { src: 'imagens/img2.jpg', name: 'Laura', score: 0 },
  { src: 'imagens/img3.jpg', name: 'Mirely', score: 0 },
  { src: 'imagens/img4.jpg', name: 'Graziely', score: 0 },
  { src: 'imagens/img5.jpg', name: 'Isa', score: 0 },
  { src: 'imagens/img6.jpg', name: 'Pessoa1', score: 0 },
  { src: 'imagens/img7.jpg', name: 'Pessoa2', score: 0 },
  { src: 'imagens/img8.jpg', name: 'Bia', score: 0 },
   { src: 'imagens/img9.jpg', name: 'Leuda', score: 0 },
  { src: 'imagens/img10.jpg', name: 'Maria', score: 0 },
  { src: 'imagens/img11.jpg', name: 'Fernanda', score: 0 },
  { src: 'imagens/img12.jpg', name: 'DJemily', score: 0 },
  { src: 'imagens/img13.jpg', name: 'Maria', score: 0 },
  { src: 'imagens/img14.jpg', name: 'Maria', score: 0 },
  { src: 'imagens/img15.jpg', name: 'Vitoria', score: 0 },
  { src: 'imagens/img16.jpg', name: 'Sofia', score: 0 },
  { src: 'imagens/img17.jpg', name: 'Laine', score: 0 },
  { src: 'imagens/img18.jpg', name: 'Carlos', score: 0 },
  { src: 'imagens/img19.jpg', name: 'Ingrid', score: 0 },
  { src: 'imagens/img20.jpg', name: 'Heloarannia', score: 0 },
  { src: 'imagens/img21.jpg', name: 'Karla', score: 0 },
  { src: 'imagens/img22.jpg', name: 'Julia', score: 0 },
  { src: 'imagens/img23.jpg', name: 'Paola', score: 0 }, 
  { src: 'imagens/img24.jpg', name: 'Livy',score: 0 },
  { src: 'imagens/img25.jpg', name: 'Bianca',score: 0 },
  { src: 'imagens/img26.jpg', name: 'Camila',score: 0 },
  { src: 'imagens/img27.jpg', name: 'Elian',score: 0 },
  { src: 'imagens/img28.jpg', name: 'Lara',score: 0 },
  { src: 'imagens/img29.jpg', name: 'Yasmim',score: 0 },
  { src: 'imagens/img30.jpg', name: 'Livy',score: 0 }
  // Adicione até img200.jpg aqui
];

let currentPair = [];

function getRandomPair() {
  let i = Math.floor(Math.random() * images.length);
  let j;
  do {
    j = Math.floor(Math.random() * images.length);
  } while (j === i);
  return [i, j];
}

function renderPair() {
  currentPair = getRandomPair();
  const p1 = images[currentPair[0]];
  const p2 = images[currentPair[1]];

  document.getElementById('img1').src = p1.src;
  document.getElementById('img2').src = p2.src;
  document.getElementById('name1').textContent = p1.name;
  document.getElementById('name2').textContent = p2.name;
}

function vote(winnerIndex) {
  images[currentPair[winnerIndex]].score++;
  renderPair();
  updateRanking();
}

function updateRanking() {
  const list = document.getElementById('rankingList');
  list.innerHTML = '';
  images
    .slice()
    .sort((a, b) => b.score - a.score)
    .forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name} – ${p.score} votos`;
      list.appendChild(li);
    });
}

renderPair();
updateRanking();