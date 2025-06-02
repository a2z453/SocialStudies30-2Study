// Correct answers for ideologies
const correctIdeologyAnswers = {
    communism: ['classless', 'state-controlled', 'collective'],
    fascism: ['nationalism', 'dictatorship', 'racial']
};

// Correct answers for alliances
const correctAllianceAnswers = {
    nato: ['usa', 'canada', 'uk'],
    warsaw: ['poland', 'ussr', 'hungary']
};

// Track placed items
const placedItems = new Set();
const placedAllianceItems = new Set();

document.addEventListener('DOMContentLoaded', () => {
    // Drag and Drop (Ideologies)
    const ideologyDraggables = document.querySelectorAll('#characteristics .draggable');
    const ideologyDropZones = document.querySelectorAll('#communismZone, #fascismZone');

    ideologyDraggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.dataset.id);
            e.dataTransfer.setData('text/source', e.target.parentElement.id);
        });
    });

    ideologyDropZones.forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const sourceId = e.dataTransfer.getData('text/source');
            const sourceElement = document.querySelector(`#characteristics .draggable[data-id="${id}"]`);

            if (placedItems.has(id)) return;

            if (sourceElement) {
                const clone = sourceElement.cloneNode(true);
                clone.classList.add('placed');
                clone.addEventListener('dragstart', e => {
                    e.dataTransfer.setData('text/plain', clone.dataset.id);
                    e.dataTransfer.setData('text/source', zone.id);
                });
                zone.appendChild(clone);
                placedItems.add(id);
                if (sourceId === 'characteristics') sourceElement.remove();

                clone.addEventListener('dblclick', () => {
                    const original = document.createElement('div');
                    original.className = 'draggable';
                    original.draggable = true;
                    original.dataset.id = id;
                    original.textContent = clone.textContent;
                    document.getElementById('characteristics').appendChild(original);
                    clone.remove();
                    placedItems.delete(id);
                    original.addEventListener('dragstart', e => {
                        e.dataTransfer.setData('text/plain', original.dataset.id);
                        e.dataTransfer.setData('text/source', 'characteristics');
                    });
                });
            }
        });
    });

    // Submit Ideologies
    document.getElementById('submitIdeologies').addEventListener('click', () => {
        const communismZone = document.getElementById('communismZone');
        const fascismZone = document.getElementById('fascismZone');
        const communismItems = Array.from(communismZone.querySelectorAll('.draggable')).map(item => item.dataset.id);
        const fascismItems = Array.from(fascismZone.querySelectorAll('.draggable')).map(item => item.dataset.id);

        let correctCount = 0;
        let feedback = '<h4>Ideology Results:</h4>';

        let communismCorrect = communismItems.filter(id => correctIdeologyAnswers.communism.includes(id)).length;
        correctCount += communismCorrect;
        feedback += `<p><strong>Communism:</strong> ${communismCorrect}/${correctIdeologyAnswers.communism.length} correct. `;
        feedback += `Placed: ${communismItems.join(', ') || 'none'}. `;
        feedback += `Expected: ${correctIdeologyAnswers.communism.join(', ')}.</p>`;

        let fascismCorrect = fascismItems.filter(id => correctIdeologyAnswers.fascism.includes(id)).length;
        correctCount += fascismCorrect;
        feedback += `<p><strong>Fascism:</strong> ${fascismCorrect}/${correctIdeologyAnswers.fascism.length} correct. `;
        feedback += `Placed: ${fascismItems.join(', ') || 'none'}. `;
        feedback += `Expected: ${correctIdeologyAnswers.fascism.join(', ')}.</p>`;

        feedback += `<p><strong>Total Score:</strong> ${correctCount}/6</p>`;
        document.getElementById('ideologyFeedback').innerHTML = feedback;
    });

    // Drag and Drop (Alliances)
    const allianceDraggables = document.querySelectorAll('#countries .draggable');
    const allianceDropZones = document.querySelectorAll('#natoZone, #warsawZone');

    allianceDraggables.forEach(draggable => {
        draggable.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', e.target.dataset.id);
            e.dataTransfer.setData('text/source', e.target.parentElement.id);
        });
    });

    allianceDropZones.forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const sourceId = e.dataTransfer.getData('text/source');
            const sourceElement = document.querySelector(`#countries .draggable[data-id="${id}"]`);

            if (placedAllianceItems.has(id)) return;

            if (sourceElement) {
                const clone = sourceElement.cloneNode(true);
                clone.classList.add('placed');
                clone.addEventListener('dragstart', e => {
                    e.dataTransfer.setData('text/plain', clone.dataset.id);
                    e.dataTransfer.setData('text/source', zone.id);
                });
                zone.appendChild(clone);
                placedAllianceItems.add(id);
                if (sourceId === 'countries') sourceElement.remove();

                clone.addEventListener('dblclick', () => {
                    const original = document.createElement('div');
                    original.className = 'draggable';
                    original.draggable = true;
                    original.dataset.id = id;
                    original.textContent = clone.textContent;
                    document.getElementById('countries').appendChild(original);
                    clone.remove();
                    placedAllianceItems.delete(id);
                    original.addEventListener('dragstart', e => {
                        e.dataTransfer.setData('text/plain', original.dataset.id);
                        e.dataTransfer.setData('text/source', 'countries');
                    });
                });
            }
        });
    });

    // Submit Alliances
    document.getElementById('submitAlliances').addEventListener('click', () => {
        const natoZone = document.getElementById('natoZone');
        const warsawZone = document.getElementById('warsawZone');
        const natoItems = Array.from(natoZone.querySelectorAll('.draggable')).map(item => item.dataset.id);
        const warsawItems = Array.from(warsawZone.querySelectorAll('.draggable')).map(item => item.dataset.id);

        let correctCount = 0;
        let feedback = '<h4>Alliance Results:</h4>';

        let natoCorrect = natoItems.filter(id => correctAllianceAnswers.nato.includes(id)).length;
        correctCount += natoCorrect;
        feedback += `<p><strong>NATO:</strong> ${natoCorrect}/${correctAllianceAnswers.nato.length} correct. `;
        feedback += `Placed: ${natoItems.join(', ') || 'none'}. `;
        feedback += `Expected: ${correctAllianceAnswers.nato.join(', ')}.</p>`;

        let warsawCorrect = warsawItems.filter(id => correctAllianceAnswers.warsaw.includes(id)).length;
        correctCount += warsawCorrect;
        feedback += `<p><strong>Warsaw Pact:</strong> ${warsawCorrect}/${correctAllianceAnswers.warsaw.length} correct. `;
        feedback += `Placed: ${warsawItems.join(', ') || 'none'}. `;
        feedback += `Expected: ${correctAllianceAnswers.warsaw.join(', ')}.</p>`;

        feedback += `<p><strong>Total Score:</strong> ${correctCount}/6</p>`;
        document.getElementById('allianceFeedback').innerHTML = feedback;
    });

    // Submit Quiz
    document.getElementById('quizForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const answers = {
            q1: 'A',
            q2: 'B',
            q3: 'C',
            q4: 'B'
        };

        let score = 0;
        let feedback = '<h4>Quiz Results:</h4>';

        for (let i = 1; i <= 4; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            const isCorrect = selected && selected.value === answers[`q${i}`];
            if (isCorrect) score++;
            feedback += `<p><strong>Question ${i}:</strong> ${isCorrect ? 'Correct' : 'Incorrect'}. `;
            feedback += `Selected: ${selected ? selected.value : 'none'}. `;
            feedback += `Correct: ${answers[`q${i}`]}.</p>`;
        }

        const q5Answer = document.querySelector('textarea[name="q5"]').value.trim();
        let q5Feedback = '<p><strong>Question 5 (Short Answer):</strong> ';
        if (q5Answer.length === 0) {
            q5Feedback += 'No answer provided.';
        } else {
            q5Feedback += `Your answer has been recorded. (Sample keywords: cultural homogenization, loss of diversity, etc.)`;
        }
        q5Feedback += '</p>';

        feedback += q5Feedback;
        feedback += `<p><strong>Multiple Choice Score:</strong> ${score}/4</p>`;

        document.getElementById('quizFeedback').innerHTML = feedback;
    });
});
