function gradeQuiz(formId, feedbackId, correctAnswers) {
  const form = document.getElementById(formId);
  const feedback = document.getElementById(feedbackId);
  let score = 0;
  const questions = form.querySelectorAll('ol li');

  questions.forEach((question, index) => {
    const radios = question.querySelectorAll('input[type="radio"]');
    let userAnswer = '';
    radios.forEach(radio => {
      if (radio.checked) userAnswer = radio.value;
    });
    if (userAnswer === correctAnswers[index]) score++;
  });

  const percentage = (score / questions.length) * 100;
  feedback.innerHTML = `Your score: ${score} out of ${questions.length} (${percentage}%)`;
  if (percentage === 100) feedback.innerHTML += ' - Excellent work!';
  else if (percentage >= 70) feedback.innerHTML += ' - Good job!';
  else feedback.innerHTML += ' - Keep studying!';
}