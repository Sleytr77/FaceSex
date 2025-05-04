const firebaseConfig = {
  apiKey: "AIzaSyCRm4Rz5u9PFddS_7yuIKYSv-MEEdZrvh0",
  authDomain: "facesex-38cbf.firebaseapp.com",
  databaseURL: "https://facesex-38cbf-default-rtdb.firebaseio.com",
  projectId: "facesex-38cbf",
  storageBucket: "facesex-38cbf.appspot.com",
  messagingSenderId: "990009067117",
  appId: "1:990009067117:web:23dd05f3c5c9c0073fa164"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let images = [
  { src: 'imagens/img1.jpg', name: 'Rhianna' },
  { src: 'imagens/img2.jpg', name: 'Laura' },
  { src: 'imagens/img3.jpg', name: 'Mirely' },
  { src: 'imagens/img4.jpg', name: 'Graziely' },
  { src: 'imagens/img5.jpg', name: 'Isa' },
  { src: 'imagens/img6.jpg', name: 'Pessoa1' },
  { src: 'imagens/img7.jpg', name: 'Pessoa2' },
  { src: 'imagens/img8.jpg', name: 'Bia' },
  { src: 'imagens/img9.jpg', name: 'Leuda' },
  { src: 'imagens/img10.jpg', name: 'Maria' },
  { src: 'imagens/img11.jpg', name: 'Fernanda' },
  { src: 'imagens/img12.jpg', name: 'DJemily' },
  { src: 'imagens/img13.jpg', name: 'Maria' },
  { src: 'imagens/img14.jpg', name: 'Maria' },
  { src: 'imagens/img15.jpg', name: 'Vitoria' },
  { src: 'imagens/img16.jpg', name: 'Sofia' },
  { src: 'imagens/img17.jpg', name: 'Laine' },
  { src: 'imagens/img18.jpg', name: 'Pessoa3' },
  { src: 'imagens/img19.jpg', name: 'Ingrid' },
  { src: 'imagens/img20.jpg', name: 'Heloarannia' },
  { src: 'imagens/img21.jpg', name: 'Karla' },
  { src: 'imagens/img22.jpg', name: 'Julia' },
  { src: 'imagens/img23.jpg', name: 'Paola' },
  { src: 'imagens/img24.jpg', name: 'Livy' },
  { src: 'imagens/img25.jpg', name: 'Bianca' },
  { src: 'imagens/img26.jpg', name: 'Camila' },
  { src: 'imagens/img27.jpg', name: 'Elian' },
  { src: 'imagens/img28.jpg', name: 'Lara' },
  { src: 'imagens/img29.jpg', name: 'Yasmim' },
  { src: 'imagens/img30.jpg', name: 'Camila2' },
  { src: 'imagens/img31.jpg', name: 'Samara' },
  { src: 'imagens/img32.jpg', name: 'Jackline' },
  { src: 'imagens/img33.jpg', name: 'Geisyla' },
  { src: 'imagens/img34.jpg', name: 'Julia Ara' },
  { src: 'imagens/img35.jpg', name: 'Livy Mace' },
  { src: 'imagens/img36.jpg', name: 'Juu' },
  { src: 'imagens/img37.jpg', name: 'Thaila' },
  { src: 'imagens/img38.jpg', name: 'Nick' },
  { src: 'imagens/img39.jpg', name: 'VitoriaX' },
  { src: 'imagens/img40.jpg', name: 'Kaemili' },
  { src: 'imagens/img41.jpg', name: 'Aline' },
  { src: 'imagens/img42.jpg', name: 'Dafine' },
  { src: 'imagens/img43.jpg', name: 'Clara' },
 { src: 'imagens/img44.jpg', name: 'Evilly' }
];

let scores = {};
let currentPair = [];
let lastPair = [];

function getRandomPair() {
  let i, j;
  do {
    i = Math.floor(Math.random() * images.length);
    j = Math.floor(Math.random() * images.length);
  } while (i === j || (lastPair.includes(i) && lastPair.includes(j)));

  lastPair = [i, j];
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
  const voted = images[currentPair[winnerIndex]].name;
  scores[voted] = (scores[voted] || 0) + 1;
  db.ref("scores").set(scores);
  renderPair();
  updateRanking();
}

function updateRanking() {
  const list = document.getElementById('rankingList');
  list.innerHTML = '';

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  for (const [name, score] of sorted) {
    const li = document.createElement('li');
    li.textContent = `${name} – ${score} votos Sex`;
    list.appendChild(li);
  }
}

function loadScores() {
  db.ref("scores").on("value", snapshot => {
    if (snapshot.exists()) {
      scores = snapshot.val();
      updateRanking();
    }
  });
}

loadScores();
renderPair();