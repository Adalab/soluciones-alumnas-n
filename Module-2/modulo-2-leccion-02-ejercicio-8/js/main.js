const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const firstElementDog = document.querySelector('.dog1');
firstElementDog.innerHTML = `<img src="${firstDogImage}"/> ${firstDogName}.`;
const secondElementDog = document.querySelector('.dog2');
secondElementDog.innerHTML = `<img src="${secondDogImage}"/> ${secondDogName}.`;
const thirdElementDog = document.querySelector('.dog3');
thirdElementDog.innerHTML = `<img src="${thirdDogImage}"/> ${thirdDogName}.`;