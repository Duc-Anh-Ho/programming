'use strict';
//Lab 11.1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  // registerNewAnswer: function () {
  //   const answer = Number(
  //     prompt(`${this.question}
  //   ${this.options[0]}
  //   ${this.options[1]}
  //   ${this.options[2]}
  //   ${this.options[3]}
  //   ${this.options.join('\n')}
  //   (Write option number)`)
  //   );
  // for (let i = 0; i < this.options.length; i++) {
  //   if (answer === i) {
  //     console.log(this.answers[i]);
  //     this.answers[i] += 1;
  //   }
  // }
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // If use this way can not detect NOT IN PUT ("") case
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
const answerBtn = document.querySelector('.poll');
answerBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// Lab 11.2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
