// let wrapp = document.createElement('div');
// let count = 0;
// let ball = 0;
// let left = 5;
// let timerNumber = document.createElement('p');

// let time = 180;
// const timer = setInterval(function() {
//   timerNumber.textContent = time--;
//   if (time === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//   }
// }, 1000);
// document.body.append(timerNumber)


// wrapp.innerHTML = `
//     <div class="wrapper">
//         <p class="tries__number">URINISHLAR SONI: ${count++}</p>
//         <p class="ball">BALL: ${ball++}</p>
//         <p class="tries__left">QOLGAN URINISHLAR SONI:${left--}</p>
//     </div>
//     <p class="timer"></p>
// `

// document.body.appendChild(wrapp);

// // roadSymbol.forEach(item => {
// //     let img = document.createElement('img')
// //     img.src = item.symbol_img;
// //     document.body.append(img)
// //     console.log(item.symbol_img);
// // })

// let imageWrapper = document.createElement('div');
// imageWrapper.classList.add('image-wrapper');

// // roadSymbol.forEach(item => {
// //     let img = document.createElement('img');
// //     img.src = item.symbol_img;
// //     imageWrapper.appendChild(img);
// //     document.body.appendChild(imageWrapper);
// // })


// roadSymbol.forEach(item => {
//     function renderRandom() {
//         let randomNumber = Math.round(Math.random() * 100)
//         if (randomNumber == item.id) {
//             let img = document.createElement('img');
//             img.src = item.symbol_img;
//             imageWrapper.appendChild(img);
//             document.body.appendChild(imageWrapper);
//         }
//     }
// renderRandom()
// });



// (function() {
//     const wrapper = document.createElement('div');
//     const score = 0;
//     const tries = 5;
//     const timerNumber = document.createElement('p');
//     const imageWrapper = document.createElement('div');
//     const triesElement = document.createElement('p');
//     triesElement.className = 'tries__number';
//     triesElement.textContent = `URINISHLAR SONI: ${score}`;
//     wrapper.appendChild(triesElement);
//     const ballElement = document.createElement('p');
//       ballElement.className = 'ball';
//       ballElement.textContent = `BALL: ${score}`;
//       wrapper.appendChild(ballElement);
//     imageWrapper.classList.add('image-wrapper');
//     const questionElement = document.createElement('p');
//       questionElement.className = 'question';
//       questionElement.textContent = `Q: ${roadSymbol[Math.floor(Math.random() * roadSymbol.length)].symbol_title}`;
//       wrapper.appendChild(questionElement);
//       const triesLeftElement = document.createElement('p');
//       triesLeftElement.className = 'tries__left';
//       triesLeftElement.textContent = `QOLGAN URINISHLAR SONI: ${tries}`;
//       wrapper.appendChild(triesLeftElement);
  
//     let time = 180;
//     const timer = setInterval(function() {
//       timerNumber.textContent = time--;
//       if (time === 0) {
//         clearInterval(timer);
//         let over = document.createElement('h1')
//         over.textContent = 'Game Over';
//         document.body.appendChild(over);
//         script.stop
//       }
//     }, 1000);
//     document.body.appendChild(timerNumber);

//     const answer = () => {
//       window.addEventListener('click', (event) => {
//         if (event.target.tagName === 'IMG') {
//           const symbolId = parseInt(event.target.dataset.id);
//           if (symbolId === roadSymbol[Math.floor(Math.random() * roadSymbol.length)].id) {
//             score++;
//             tries--;
//             triesElement.textContent = `URINISHLAR SONI: ${score}`;
//             ballElement.textContent = `BALL: ${score}`;
//             triesLeftElement.textContent = `QOLGAN URINISHLAR SONI: ${tries}`;
//             questionElement.textContent = `Q: ${roadSymbol[Math.floor(Math.random() * roadSymbol.length)].symbol_title}`;
//             if (tries === 0) {
//               clearInterval(timer);
//               let over = document.createElement('h1')
//               over.textContent = 'Game Over';
//               document.body.appendChild(over);
//               script.stop
//             }
//           } else {
//             tries--;
//             triesLeftElement.textContent = `QOLGAN URINISHLAR SONI: ${tries}`;
//             if (tries === 0) {
//               clearInterval(timer);
//               let over = document.createElement('h1')
//               over.textContent = 'Game Over';
//               document.body.appendChild(over);
//               script.stop
//             } else {
//               questionElement.textContent = `Q: ${roadSymbol[Math.floor(Math.random() * roadSymbol.length)].symbol_title}`;
//             }
//           }
//       }})
//     answer();
  
//     wrapper.className = 'wrapper';
//     document.body.appendChild(wrapper);
  
//     // Shuffle the roadSymbol array
//     const shuffledRoadSymbol = roadSymbol.slice().sort(() => Math.random() - 0.5);
  
//     shuffledRoadSymbol.forEach(item => {
//       const img = document.createElement('img');
//       img.src = item.symbol_img;
//       imageWrapper.appendChild(img);
//     });
//     document.body.appendChild(imageWrapper);
//     };
//   })()


(function() {
  const wrapper = document.createElement('div');
  let score = 0;
  let tries = 5;
  const timerNumber = document.createElement('p');
  const imageWrapper = document.createElement('div');
  const triesElement = document.createElement('p');
  triesElement.className = 'tries__number';
  triesElement.textContent = `URINISHLAR SONI: ${tries}`;
  wrapper.appendChild(triesElement);

  const ballElement = document.createElement('p');
  ballElement.className = 'ball';
  ballElement.textContent = `BALL: ${score}`;
  wrapper.appendChild(ballElement);

  imageWrapper.classList.add('image-wrapper');

  let currentSymbol = getRandomSymbol();
  const questionElement = document.createElement('p');
  questionElement.className = 'question';
  questionElement.textContent = `Q: ${currentSymbol.symbol_title}`;
  wrapper.appendChild(questionElement);

  const triesLeftElement = document.createElement('p');
  triesLeftElement.className = 'tries__left';
  triesLeftElement.textContent = `QOLGAN URINISHLAR SONI: ${tries}`;
  wrapper.appendChild(triesLeftElement);

  timerNumber.className = 'timer';
  let time = 180;
  const timer = setInterval(function() {
    timerNumber.textContent = `TIMER: ${time--}`;
    if (time < 0) {
      endGame();
    }
  }, 1000);
  wrapper.appendChild(timerNumber);

  document.body.appendChild(wrapper);

  let correctImage = null;

  const answer = (event) => {
    if (event.target.tagName === 'IMG' && !event.target.disabled) {
      const symbolId = parseInt(event.target.dataset.id);
      if (symbolId === currentSymbol.id) {
        score++;
        tries--;
        triesElement.textContent = `URINISHLAR SONI: ${tries}`;
        ballElement.textContent = `BALL: ${score}`;
        triesLeftElement.textContent = `QOLGAN URINISHLAR SONI: ${tries}`;
        event.target.disabled = true;
        event.target.style.opacity = 0.5;
        correctImage = event.target;

        if (tries === 0) {
          endGame();
        } else {
          currentSymbol = getRandomSymbol();
          questionElement.textContent = `Q: ${currentSymbol.symbol_title}`;
        }
      } else {
        tries--;
        triesLeftElement.textContent = `QOLGAN URINISHLAR SONI: ${tries}`;
        vibrateAndSound();
        addVisualFeedback(event.target);
        if (tries === 0) {
          endGame();
        }
      }
    }
  };

  function vibrateAndSound() {
    // Vibration
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }

    // Sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime); // Frequency value in Hz
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); // Volume

    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
    }, 300);
  }

  function addVisualFeedback(element) {
    element.classList.add('shake', 'incorrect');
    setTimeout(() => {
      element.classList.remove('shake', 'incorrect');
    }, 500);
  }

  // Shuffle the roadSymbol array
  const shuffledRoadSymbol = roadSymbol.slice().sort(() => Math.random() - 0.5);

  shuffledRoadSymbol.forEach(item => {
    const img = document.createElement('img');
    img.src = item.symbol_img;
    img.dataset.id = item.id;
    imageWrapper.appendChild(img);
  });
  document.body.appendChild(imageWrapper);

  window.addEventListener('click', answer);

  function getRandomSymbol() {
    return roadSymbol[Math.floor(Math.random() * roadSymbol.length)];
  }

  function endGame() {
    clearInterval(timer);
    let over = document.createElement('h1');
    over.textContent = 'Game Over';
    over.className = 'game-over';
    document.body.appendChild(over);
    let again = document.createElement('button')
    again.textContent = 'Restart';
    again.className ='btn__start';
    again.addEventListener('click', () => {
      window.location.reload();
    });
    document.body.appendChild(again);
    window.removeEventListener('click', answer);

    // Remove all images
    document.querySelectorAll('img').forEach(img => img.remove());

    // Remove game elements
    wrapper.innerHTML = '';
    imageWrapper.innerHTML = '';
  }
})();