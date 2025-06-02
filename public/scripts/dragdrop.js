// Initialize drag-and-drop functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.draggable');
  const droppables = document.querySelectorAll('.droppable');
  const feedback = document.getElementById('dragDropFeedback');
  let score = 0;
  let totalMatches = droppables.length;

  // Add drag event listeners to draggable items
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      e.target.classList.add('dragging');
    });

    draggable.addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
    });
  });

  // Add drop event listeners to droppable areas
  droppables.forEach(droppable => {
    droppable.addEventListener('dragover', (e) => {
      e.preventDefault();
      droppable.classList.add('drag-over');
    });

    droppable.addEventListener('dragleave', () => {
      droppable.classList.remove('drag-over');
    });

    droppable.addEventListener('drop', (e) => {
      e.preventDefault();
      droppable.classList.remove('drag-over');
      const draggableId = e.dataTransfer.getData('text/plain');
      const draggable = document.getElementById(draggableId);
      const correctMatch = droppable.getAttribute('data-match');

      // Check if the dropped item matches the droppable's correct answer
      if (draggableId === correctMatch) {
        droppable.appendChild(draggable);
        draggable.setAttribute('draggable', 'false'); // Prevent further dragging
        droppable.classList.add('correct');
        score++;
        feedback.textContent = `Correct! ${score}/${totalMatches} matched.`;
      } else {
        droppable.classList.add('incorrect');
        setTimeout(() => droppable.classList.remove('incorrect'), 1000);
        feedback.textContent = `Incorrect. Try again! ${score}/${totalMatches} matched.`;
      }

      // Check if all matches are complete
      if (score === totalMatches) {
        feedback.textContent = `Congratulations! All ${totalMatches} matches correct!`;
      }
    });
  });

  // Reset button functionality
  const resetButton = document.getElementById('resetDragDrop');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      // Move draggables back to their original container
      const dragContainer = document.getElementById('dragContainer');
      draggables.forEach(draggable => {
        dragContainer.appendChild(draggable);
        draggable.setAttribute('draggable', 'true');
      });

      // Reset droppable areas
      droppables.forEach(droppable => {
        droppable.classList.remove('correct', 'incorrect');
      });

      // Reset score and feedback
      score = 0;
      feedback.textContent = `Score: ${score}/${totalMatches}. Drag items to match.`;
    });
  }
});