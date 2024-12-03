document.addEventListener('DOMContentLoaded', () => {
    const textSample = document.getElementById('text-sample');
    const userInput = document.getElementById('user-input');
    const resultDisplay = document.getElementById('result');
    const skipButton = document.getElementById('skip-button');
    const practiceCheckbox = document.getElementById('practice-checkbox');
    const levelDropdown = document.getElementById('level-dropdown');
    const checkboxContainer = document.querySelector('.checkboxes'); // Ensure you have a container for the checkboxes
    const typingToolTitle = document.getElementById('typing-tool-title'); // নতুন পরিবর্তন

    // Words array for "শব্দ" level
    const words = [
        "বাংলা", "বাংলাদেশ", "আমার", "তোমার", "বৃষ্টি", "সূর্য", "চাঁদ",
        "রাত", "দেওয়াল", "গাছ", "ফুল", "পাখি", "মেঘ", "নদী", "সাগর",
        "ভালো", "মিষ্টি", "শান্তি", "স্বপ্ন", "প্রেম", "বন্ধুত্ব",
        "কবি", "গান", "ছবি", "কথা", "আকাশ", "পাতা", "জল", "ভ্রমণ",
        "সামাজিকতা", "সামগ্রিক", "অনুশীলন", "বিকাশ", "উন্নয়ন",
        "সম্ভাবনা", "জীবন", "শিক্ষা", "স্বাস্থ্য", "অভ্যাস", "অনুপ্রেরণা",
        "শৃঙ্খলা", "সম্পর্ক", "বক্তৃতা", "পাঠ", "গবেষণা", "প্রকৃতি",
        "সফলতা", "অর্জন", "ভবিষ্যত", "পরিকল্পনা", "শান্তিপূর্ণ",
        "উত্তর", "দক্ষতা", "সাহিত্য", "পোশাক", "জন্মদিন", "আনন্দ",
        "অভিজ্ঞতা", "সম্মান", "ভ্রমণ", "সম্পর্ক", "পরিবার",
        "বন্ধু", "সঙ্গী", "দুর্ভাগ্য", "সাহস", "সুন্দর", "মধুর",
        "স্বপ্ন", "আশা", "নিশ্চয়তা", "শক্তি", "সম্মান", "বিশ্বাস",
        "শান্তি", "নির্মল", "শিক্ষক", "ছাত্র", "কর্ম", "সামাজিক",
        "কৃতজ্ঞতা", "পুষ্টি", "যোগাযোগ", "বিশ্ব", "পৃথিবী",
        "সামাজিকতা", "সাধারণ", "সুবিধা", "মানুষ", "অভিজ্ঞতা"
    ];

    // Sentences array for "বাক্য" level
    const sentences = [
        'আমি বাংলা লিখতে চাই।',
        'তুমি কোথায় যাচ্ছো?',
        'আজ আবহাওয়া খুব ভালো।',
        'আমরা আগামীকাল সিনেমা দেখতে যাব।',
        'তুমি কি আমাকে সাহায্য করতে পারবে?',
        'জীবনে অনেক চ্যালেঞ্জ থাকে।',
        'শিক্ষা জীবনের মৌলিক ভিত্তি।',
        'বন্ধুত্বই জীবনকে সুন্দর করে।',
        'প্রত্যেকটি দিন নতুন কিছু শেখার সুযোগ।',
        'স্বাস্থ্যই সম্পদ।',
        'নতুন কিছু শেখা সবসময় মজাদার।',
        'বিশ্বব্যাপী সমস্যা সমাধান করা উচিত।',
        'সফলতা পরিশ্রমের ফল।',
        'বিশ্বাস গড়ে তোলা খুবই গুরুত্বপূর্ণ।',
        'আনন্দ ভাগাভাগি করলে বাড়ে।',
        'অবসাদ মুক্তির জন্য আনন্দ করা উচিত।',
        'ভ্রমণ জীবনের অন্যতম সেরা অভিজ্ঞতা।',
        'একটি বই পড়া মানসিক উন্নতির উপায়।',
        'মুক্ত বাতাসে হাঁটা স্বাস্থ্যের জন্য ভাল।',
        'নতুন বন্ধুত্ব জীবনকে আনন্দিত করে।'
    ];

    let currentIndex = 0;

    function updateWordSample() {
        const selectedLevel = levelDropdown.value;

        // If "শব্দ" level is selected
        if (selectedLevel === 'shobdo') {
            checkboxContainer.style.display = 'none'; // Hide checkboxes
            typingToolTitle.textContent = "Typing Practice Tool"; // "শব্দ" নির্বাচিত হলে নতুন টেক্সট দেখান
            if (practiceCheckbox.checked) {
                textSample.textContent = words[Math.floor(Math.random() * words.length)];
            } else {
                textSample.textContent = words[currentIndex];
            }
        }

        // If "বাক্য" level is selected
        else if (selectedLevel === 'bakko') {
            checkboxContainer.style.display = 'block'; // Show checkboxes
            typingToolTitle.textContent = "Typing Practice Tool"; // "শব্দ" নির্বাচিত হলে নতুন টেক্সট দেখান
            if (practiceCheckbox.checked) {
                textSample.textContent = sentences[Math.floor(Math.random() * sentences.length)];
            } else {
                textSample.textContent = sentences[currentIndex];
            }
        }
    }

    levelDropdown.addEventListener('change', () => {
        currentIndex = 0; // Reset index to 0 whenever the level changes
        updateWordSample(); // Update the sample text
    });

    function checkUserInput() {
        if (userInput.value === textSample.textContent) {
            resultDisplay.textContent = 'Correct!';
            const selectedLevel = levelDropdown.value;

            // Move to the next word/sentence if not in practice mode
            if (!practiceCheckbox.checked) {
                if (selectedLevel === 'shobdo') {
                    currentIndex = (currentIndex + 1) % words.length;
                } else if (selectedLevel === 'bakko') {
                    currentIndex = (currentIndex + 1) % sentences.length;
                }
            }
            updateWordSample(); // Update the sample text
            userInput.value = ''; // Clear the input field
        } else if (userInput.value.length > textSample.textContent.length) {
            resultDisplay.innerHTML = `<span style="color: red;">Mistyped! You Typed: ${userInput.value}</span>`;
            userInput.value = ''; // Clear the input field
        }
    }

    userInput.addEventListener('input', checkUserInput); // Check user input on every keystroke

    skipButton.addEventListener('click', () => {
        const selectedLevel = levelDropdown.value;
        if (selectedLevel === 'shobdo') {
            currentIndex = (currentIndex + 1) % words.length;
        } else if (selectedLevel === 'bakko') {
            currentIndex = (currentIndex + 1) % sentences.length;
        }
        updateWordSample(); // Update the sample text
        userInput.value = ''; // Clear the input field
        resultDisplay.textContent = ''; // Clear the result display
    });

    // Initialize the text sample when the page loads
    updateWordSample();
});
