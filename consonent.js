document.addEventListener('DOMContentLoaded', () => {
    const textSample = document.getElementById('text-sample');
    const userInput = document.getElementById('user-input');
    const resultDisplay = document.getElementById('result');
    const skipButton = document.getElementById('skip-button');
    const levelDropdown = document.getElementById('level-dropdown');
    const practiceCheckbox = document.getElementById('practice-checkbox');
    const learnCheckbox = document.getElementById('learn-checkbox');
    const typingToolTitle = document.getElementById('typing-tool-title');

    const consonents = [
        'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ',
        'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন',
        'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ',
        'স', 'হ', 'ড়', 'ঢ', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ'
    ];

    let currentIndex = 0;

    function updateConsonantSample() {
        const selectedLevel = levelDropdown.value;

        if (selectedLevel === 'benjanbarna') {
            if (practiceCheckbox.checked) {
                textSample.textContent = consonents[Math.floor(Math.random() * consonents.length)];
            } else {
                textSample.textContent = consonents[currentIndex];
            }

            if (learnCheckbox.checked) {
                const keyMapping = {
                    'ক': 'J', 'খ': 'Shift + J', 'গ': 'O', 'ঘ': 'Shift + O',
                    // Add other mappings here
                };
                typingToolTitle.textContent = keyMapping[textSample.textContent] || 'Typing Practice Tool';
            } else {
                typingToolTitle.textContent = 'Typing Practice Tool';
            }
        }
    }

    levelDropdown.addEventListener('change', () => {
        currentIndex = 0;
        updateConsonantSample();
    });

    function checkUserInput() {
        if (userInput.value === textSample.textContent) {
            resultDisplay.textContent = 'Correct!';
            if (!practiceCheckbox.checked) {
                currentIndex = (currentIndex + 1) % consonents.length;
            }
            updateConsonantSample();
            userInput.value = '';
        } else if (userInput.value.length > textSample.textContent.length) {
            resultDisplay.innerHTML = `<span style="color: red;">Mistyped! You Typed: ${userInput.value}</span>`;
            userInput.value = '';
        }
    }

    userInput.addEventListener('input', checkUserInput);

    skipButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % consonents.length;
        updateConsonantSample();
        userInput.value = '';
        resultDisplay.textContent = '';
    });

    learnCheckbox.checked = true;
    updateConsonantSample();
});
