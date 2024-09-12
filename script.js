const sets = ['s1', 's2'];

// Score display elements
const scoreDisplaySet1 = document.getElementById('score-display-set1');
const scoreDisplaySet2 = document.getElementById('score-display-set2');

// Questions and point values
const questions = {
  s1: [
    {
      id: "q1",
      answers: {
        yes: 1,
        no: 0,
      },
    },
    // Add more questions for Set 1
],
  s2: [
    {
      id: "q1",
      answers: {
        yes: 1,
        no: 0,
      },
    },
    // Add more questions for Set 2
],
};

// Calculate and update the scores when checkboxes are clicked
document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
  input.addEventListener('change', () => {
    const setId = input.name.split('q')[0];
    const questionId = input.name;
    const answerValue = questions[setId].find((q) => q.id === questionId).answers[input.value];

    // Update the total score
let totalScore = 0;
    questions[setId].forEach((q) => {
      const selectedAnswerValues = document.querySelectorAll(`input[name="${q.id}"]:checked`);
      selectedAnswerValues.forEach((v) => {
        totalScore += q.answers[v.value];
      });
    });

    const scoreDisplayElement = document.getElementById(`score-display-${setId}`);
    scoreDisplayElement.innerHTML = totalScore;
  });
});
