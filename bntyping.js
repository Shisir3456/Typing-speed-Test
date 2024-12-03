document.addEventListener('DOMContentLoaded', () => {
    const textSample = document.getElementById('text-sample');
    const userInput = document.getElementById('user-input');
    const resultDisplay = document.getElementById('result');
    const skipButton = document.getElementById('skip-button');
    const learnCheckbox = document.getElementById('learn-checkbox');
    const practiceCheckbox = document.getElementById('practice-checkbox');
    const typingToolTitle = document.querySelector('.typing-tool h3');
    const levelDropdown = document.getElementById('level-dropdown');
    const languageDropdown = document.getElementById('language-dropdown');

    const vowels = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ'];
    const benjanbarnaKaToNga = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ'];
    const benjanbarnaToN = ['ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন'];
    const benjanbarnaPaToSa = ['প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ'];
    const benjanbarnaHaToAnuswar = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ',
        'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন',
        'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ',
        'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ'];
    const juktabarna = [
        'ক্ত', 'ষ্ণ', 'ব্দ', 'ন্ত', 'ঙ্খ', 'ষ্ঠ', 'স্থ', 'ল্প', 'ঞ্চ',
        'ক্ষ', 'স্ত্র', 'ঞ্জ', 'জ্ঞ', 'ত্ত', 'ত্র', 'স্ব', 'দ্ধ', 'রূ', 'ঙ্গ',
        'ক্ষ্ণ', 'স্ক', 'ক্স', 'ঙ্ক', 'গ্ধ', 'ঞ্ছ', 'গ্র', 'গ্ল', 'গ্রু', 'ঙ্ক',
        'ঙ্খ', 'জ্জ', 'দ্ম', 'জ্জ্ব', 'ট্ট', 'ন্ঠ', 'ত্থ', 'ত্ম', 'ত্ত্ব', 'ত্রু',
        'দ্রু', 'ধ্রু', 'ন্থ', 'ন্ব', 'ন্ম', 'ন্ট্রো', 'ন্দ্র', 'ন্ধ', 'ব্ধ', 'ভ্র',
        'ভ্রু', 'ম্ন', 'ক্ত', 'ক্ষ', 'হ্ম', 'ক্ষ্ম', 'জ্ঞ', 'ঞ্জ', 'ঞ্চ', 'ব্ব',
        'ত্ত', 'ত্র', 'হৃ', 'ঘু', 'হু', 'শু', 'র', 'ন্ত্র', 'দ্ধ', 'দ্ভ', 'ক্স',
        'ক্ম', 'ক্ল', 'ঙ্গ', 'স্ক্র', 'স্প্ল', 'হ্ন', 'স্ফ', 'চ্ছ্ব', 'হ্ব', 'চ্ছ',
        'ক্ক', 'গ্ধ', 'গ্ম', 'ল্কো', 'শ্ম', 'ষ্ক', 'ষ্ঠ', 'ষ্প', 'ষ্ফ', 'ষ্ট্র',
        'ষ্ণ', 'ষ্ম', 'স্থ', 'স্ত্র', 'স্রু'
    ];

    const juktabarnaKeyMapping = {
        'ক্ত': 'J+G+K',
        'ষ্ণ': 'Shift+N+G+Shift+B',
        'ব্দ': 'H+G+L',
        'ন্ত': 'B+G+K',
        'ঙ্খ': 'N+G+Shift+J',
        'ষ্ঠ': 'Shift+N+G+Shift+T',
        'স্থ': 'N+G+Shift+K',
        'ল্প': 'Shift+V+G+R',
        'ঞ্চ': 'Shift+I+G+Y',
        'ক্ষ': 'J+G+Shift+N',
        'স্ত্র': 'N+G+K+Z',
        'ঞ্জ': 'Shift+I+G+U',
        'জ্ঞ': 'U+G+Shift+I',
        'ত্ত': 'K+G+K',
        'ত্র': 'K+Z',
        'স্ব': 'N+G+H',
        'দ্ধ': 'L+G+Shift+L',
        'রূ': 'V+Shift+S',
        'ঙ্গ': 'Q+G+O',
        'ক্ষ্ণ': 'J+G+Shift+N+G+B',
        'স্ক': 'N+G+J',
        'ক্স': 'J+G+N',
        'ঙ্ক': 'Q+G+J',
        'গ্ধ': 'O+G+Shift+L',
        'ঞ্ছ': 'Shift+I+G+Shift+Y',
        'গ্র': 'O+Z',
        'গ্ল': 'O+G+Shift+V',
        'গ্রু': 'O+Z+S',
        'ঙ্খ': 'Q+G+Shift+J',
        'জ্জ': 'U+G+U',
        'দ্ম': 'L+G+M',
        'জ্জ্ব': 'U+G+Shift+I',
        'ট্ট': 'T+T',
        'ন্ঠ': 'Shift+B+G+Shift+T',
        'ত্থ': 'K+G+Shift+K',
        'ত্ম': 'K+G+M',
        'ত্ত্ব': 'K+G+K+G+H',
        'ত্রু': 'K+Z+S',
        'দ্রু': 'L+Z+S',
        'ধ্রু': 'Shift+L+Z+S',
        'ন্থ': 'B+G+Shift+K',
        'ন্ব': 'B+G+H',
        'ন্ম': 'B+G+M',
        'ন্ট্রো': 'B+G+T+Z+F',
        'ন্দ্র': 'B+G+L+Z',
        'ন্ধ': 'B+Shift+L',
        'ব্ধ': 'H+G+Shift+L',
        'ভ্র': 'Shift+H+Z',
        'ভ্রু': 'Shift+H+Z+Shift+S',
        'ম্ন': 'M+G+B',
        'ক্ত': 'J+G+K',
        'ক্ষ': 'J+G+Shift+N',
        'হ্ম': 'I+G+M',
        'ক্ষ্ম': 'J+G+Shift+N+G+M',
        'জ্ঞ': 'U+G+Shift+I',
        'ঞ্জ': 'Shift+I+G+U',
        'ঞ্চ': 'Shift+I+G+Y',
        'ব্ব': 'H+G+H',
        'ত্ত': 'K+G+K',
        'ত্র': 'K+Z',
        'হৃ': 'I+A',
        'ঘু': 'Shift+O+S',
        'হু': 'I+S',
        'শু': 'Shift+M+S',
        'র': 'J+Z',
        'ন্ত্র': 'B+G+K+Z',
        'দ্ধ': 'L+G+Shift+L',
        'দ্ভ': 'L+G+Shift+H',
        'ক্স': 'J+G+N',
        'ক্ম': 'J+G+M',
        'ক্ল': 'J+G+Shift+V',
        'ঙ্গ': 'Q+G+O',
        'স্ক্র': 'N+G+J+Z',
        'স্প্ল': 'N+G+R+G+Shift+V',
        'হ্ন': 'I+G+B',
        'স্ফ': 'N+G+Shift+R',
        'চ্ছ্ব': 'Y+G+Shift+Y+G+H',
        'হ্ব': 'I+G+H',
        'চ্ছ': 'Y+G+Shift+Y',
        'ক্ক': 'J+G+J',
        'গ্ধ': 'O+G+Shift+L',
        'গ্ম': 'O+G+M',
        'ল্কো': 'V+G+J+F',
        'শ্ম': 'Shift+M+G+M',
        'ষ্ক': 'Shift+N+G+J',
        'ষ্ঠ': 'Shift+N+G+Shift+T',
        'ষ্প': 'Shift+N+G+R',
        'ষ্ফ': 'Shift+N+G+Shift+R',
        'ষ্ট্র': 'Shift+N+G+T+Z',
        'ষ্ণ': 'Shift+N+G+Shift+B',
        'ষ্ম': 'Shift+N+G+M',
        'স্থ': 'N+G+Shift+K',
        'স্ত্র': 'N+G+K+Z',
        'স্রু': 'N+G+J+Z+S'
    };
    
    let currentIndex = 0;

    const autoSkipChars = ['ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ'];

    function updateTextSample() {
        const selectedLanguage = languageDropdown.value;
        const selectedLevel = levelDropdown.value;

        if (selectedLanguage === 'english') {
            // Redirect using forward slashes instead of backslashes
            window.location.href = 'lesson1.html';
            return;
        }

        let textSamples;
        switch (selectedLevel) {
            case 'ka-to-nga':
                textSamples = benjanbarnaKaToNga;
                break;
            case 'tta-to-na':
                textSamples = benjanbarnaToN;
                break;
            case 'pa-to-sa':
                textSamples = benjanbarnaPaToSa;
                break;
            case 'ha-to-anuswar':
                textSamples = benjanbarnaHaToAnuswar;
                break;
            case 'juktabarna':
                textSamples = juktabarna;
                break;
            default:
                textSamples = vowels;
        }

        if (practiceCheckbox.checked) {
            textSample.textContent = textSamples[Math.floor(Math.random() * textSamples.length)];
            currentIndex = textSamples.indexOf(textSample.textContent);
        } else {
            textSample.textContent = textSamples[currentIndex];
        }

        if (learnCheckbox.checked && selectedLevel === 'juktabarna') {
            typingToolTitle.textContent = juktabarnaKeyMapping[textSample.textContent] || 'Typing Practice Tool';
        } else if (learnCheckbox.checked) {
            const keyMapping = {
                'অ': 'Shift + F', 'আ': 'G + F', 'ই': 'G + D', 'ঈ': 'G + Shift + D', 'উ': 'G + S',
                'ঊ': 'G + Shift + S', 'ঋ': 'G + A', 'এ': 'G + C', 'ঐ': 'G + Shift + C', 'ও': 'x',
                'ঔ': 'G + Shift + X', 'ক': 'J', 'খ': 'Shift + J', 'গ': 'O', 'ঘ': 'Shift + O',
                'ঙ': 'Q', 'চ': 'Y', 'ছ': 'Shift + Y', 'জ': 'U', 'ঝ': 'Shift + U', 'ঞ': 'Shift + I',
                'ট': 'T', 'ঠ': 'Shift + T', 'ড': 'E', 'ঢ': 'Shift + E', 'ণ': 'Shift + B', 'ত': 'K',
                'থ': 'Shift + K', 'দ': 'L', 'ধ': 'Shift + L', 'ন': 'B', 'প': 'R', 'ফ': 'Shift + R',
                'ব': 'H', 'ভ': 'Shift + H', 'ম': 'M', 'য': 'W', 'র': 'V', 'ল': 'Shift + V',
                'শ': 'Shift + M', 'ষ': 'Shift + N', 'স': 'N', 'হ': 'I', 'ড়': 'P',
                'ঢ়': 'Shift + P', 'য়': 'Shift + W'
            };
            typingToolTitle.textContent = keyMapping[textSample.textContent] || 'Typing Practice Tool';
        } else {
            typingToolTitle.textContent = 'Typing Practice Tool';
        }
    }

    languageDropdown.addEventListener('change', updateTextSample);
    levelDropdown.addEventListener('change', () => {
        currentIndex = 0;
        updateTextSample();
    });

    function toggleCheckboxes(checkboxToCheck) {
        if (checkboxToCheck === 'learn') {
            learnCheckbox.checked = true;
            practiceCheckbox.checked = false;
        } else if (checkboxToCheck === 'practice') {
            learnCheckbox.checked = false;
            practiceCheckbox.checked = true;
        }
        updateTextSample();
    }

    learnCheckbox.addEventListener('change', () => {
        if (!learnCheckbox.checked) {
            toggleCheckboxes('practice');
        } else {
            toggleCheckboxes('learn');
        }
    });

    practiceCheckbox.addEventListener('change', () => {
        if (!practiceCheckbox.checked) {
            toggleCheckboxes('learn');
        } else {
            toggleCheckboxes('practice');
        }
    });

    

    function getTextSamples() {
        switch (levelDropdown.value) {
            case 'ka-to-nga': return benjanbarnaKaToNga;
            case 'tta-to-na': return benjanbarnaToN;
            case 'pa-to-sa': return benjanbarnaPaToSa;
            case 'ha-to-anuswar': return benjanbarnaHaToAnuswar;
            case 'juktabarna': return juktabarna;
            default: return vowels;
        }
    }

    userInput.addEventListener('input', checkUserInput);

    skipButton.addEventListener('click', () => {
        if (practiceCheckbox.checked) {
            const textSamples = getTextSamples();
            textSample.textContent = textSamples[Math.floor(Math.random() * textSamples.length)];
            currentIndex = textSamples.indexOf(textSample.textContent);
        } else {
            currentIndex = (currentIndex + 1) % getTextSamples().length;
            updateTextSample();
        }
        userInput.value = '';
        resultDisplay.textContent = '';
    });

    learnCheckbox.checked = true;

    updateTextSample();

});
