document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const levelDropdown = document.getElementById('level-dropdown');
    const userInput = document.getElementById('user-input');
    const textSample = document.getElementById('text-sample');
    const result = document.getElementById('result');
    const skipButton = document.getElementById('skip-button');
    const checkboxes = document.querySelector('.checkboxes');
    const learnCheckbox = document.getElementById('learn-checkbox');
    const practiceCheckbox = document.getElementById('practice-checkbox');

    // Texts for different levels
    const levels = {
        level1: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        level2: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        level3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
        az: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        word: ["clouds", "rain", "storm", "lightning", "sky", "glimmer", "moonlight", "shadow", "twilight",
            "dawn", "forest", "meadow", "brook", "path", "trail", "wildlife", "eagle", "hawk", "falcon",
            "soar", "harbor", "boat", "sail", "wave", "anchor", "city", "building", "street", "traffic",
            "lights", "art", "gallery", "paintings", "sculptures", "exhibit", "adventure", "explore", "discover",
            "journey", "expedition", "photography", "camera", "lens", "shutter", "click", "statue", "plaque",
            "monument", "historic", "landmark", "telescope", "stars", "galaxy", "constellation", "nebula", "ocean",
            "whale", "coral", "reef", "shore", "the", "and", "is", "for", "with", "from", "this", "that", "which",
            "but", "have", "not", "can", "will", "are", "was", "where", "when", "how", "what", "who", "there", "here",
            "more", "some", "than", "into", "over", "after", "before", "then", "now", "other", "just", "like", "been",
            "only", "down", "up", "out", "such", "each", "each", "if", "will", "these", "those", "here", "their", "which",
            "often", "always", "never", "maybe", "exactly", "quickly", "slowly", "carefully", "mostly", "probably", "recently",
            "usually", "mostly", "frequently", "rarely", "totally", "absolutely", "certainly", "perhaps", "definitely", "normally",
            "gently", "suddenly", "occasionally", "regularly", "carefully", "easily", "immediately", "simply", "gradually", "especially",
            "naturally", "perfectly", "clearly", "mostly", "actually", "generally", "literally", "mostly", "finally", "almost", "briefly",
            "intentionally", "randomly", "safely", "deliberately", "practically", "uniquely", "seriously", "smoothly", "absolute", "genuine",
            "vivid", "distinct", "vibrant", "mysterious", "crucial", "dynamic", "essential", "precise", "innovative", "elegant", "intricate",
            "unique", "profound", "thrilling", "beautiful", "remarkable", "strategic", "focused", "transparent", "authentic", "intuitive",
            "versatile", "impactful", "efficient", "modern", "sophisticated", "engaging", "creative", "strategic", "effective", "comprehensive",
            "adaptive", "complex", "practical", "elaborate", "transformative", "resilient", "captivating", "fundamental", "detailed", "insightful",
            "bold", "inspiring", "serendipity", "ephemeral", "quintessential", "zenith", "catalyst", "resilient", "quixotic", "lucid", "melancholy",
            "enigmatic", "vortex", "aesthetic", "euphoria", "radiant", "kaleidoscope", "harbinger", "luminary", "spectacle", "tranquil", "harmony",
            "nostalgia", "vivid", "ethereal", "nuance", "serene", "interlude", "alchemy", "paradox", "gossamer", "ascend", "eclectic", "reverie",
            "pristine", "eloquent", "cascade", "solitude", "phosphorescent", "tapestry", "verve", "effervescent", "juxtaposition", "sonder",
            "quasar", "tantalizing", "mosaic", "luminous", "breathtaking", "serendipitous", "ethereal", "whimsical", "transcendent",
            "mystique", "elixir", "epiphany", "resplendent", "sonder", "catharsis", "quintessence", "labyrinth", "euphoria",
            "ambivalent", "sublime", "transitory", "allegory", "crescendo", "enigma", "phantasm", "kismet", "reverberate",
            "enigmatic", "pinnacle", "celestial", "harmonious", "enchanting", "elegance", "umbrage", "serenade", "vortex",
            "zenith", "quintessential", "eclipse", "mellifluous", "ethereal", "tempest", "halcyon", "rhapsody", "mosaic",
            "lullaby", "intrigue", "alchemy", "zephyr", "vivid", "idyllic", "fathom", "aurora", "soliloquy", "sublime",
            "vanguard", "nocturnal", "pantomime", "catharsis", "ephemeral", "insightful", "veracity", "spectrum", "reverie",
            "quixotic", "transcend", "harbinger", "euphoria", "juxtapose", "phantasmagoria", "effulgent", "kaleidoscope", "labyrinthine",
            "serendipity", "maelstrom", "ethereal", "dappled", "enigma", "verdant", "ascendant", "fascinate", "arcane", "venerable", "introspective",
            "luminous", "cryptic", "mystic", "brilliant", "catharsis", "reverie", "solstice", "quintessence", "temporal", "diaphanous", "mellifluous",
            "harbinger", "nebulous", "opalescent", "seraphic", "quintessential", "effervescent", "serendipity", "veracity", "ethereal", "radiant", "sublime",
            "resilient", "mystical", "gossamer", "reverberation", "mesmerize", "sublimity", "allegory", "periphery", "aegis", "interstice", "diaphanous", "solstice",
            "nocturne", "resplendence", "vortex", "quixotry", "effervescent", "sibilant", "omnipotent", "incandescent", "seraphic", "abstruse", "cacophony", "elation", "seraph",
            "mellifluous", "resonance", "luminous", "nebulous", "venerable", "zealot", "incantation", "ineffable", "penumbra", "ethereal", "verdant", "zenith", "quiescent", "tempestuous",
            "quintessence", "reverence", "plethora", "ephemeral", "mystical", "sanguine", "enigma", "gossamer", "idyllic", "perennial", "serendipity", "transient", "calypso", "obscura", "anomaly",
            "sublime", "luminescence", "halcyon", "ethereal", "languid", "ephemeral", "phantasm", "enigma", "sonorous", "quintessential", "maelstrom", "labyrinth", "resplendent", "sublime", "celestial",
            "aurora", "rhapsody", "effervescent", "incandescent", "transcendent", "mystique", "seraphic", "opalescent", "quixotic", "vortex", "serendipitous", "reverie", "solstice", "euphoria", "epiphany",
            "tantalizing", "intrigue", "ascendant", "catharsis", "gossamer", "harmonious", "vanguard", "umbrage", "serenade", "velvet", "sublime", "obscure", "allure", "cascade", "enigmatic", "vivid", "vortex",
            "opulent", "serendipity", "effulgent", "whimsy", "mystify", "radiant", "ethereal", "quintessence", "zephyr", "luminous", "transcend", "sublime", "harbinger", "elixir", "phantom", "gossamer", "kismet",
            "soliloquy", "reverie", "verve", "nocturne", "eclipse", "labyrinthine", "halcyon"
        ],




        sentence: [

            "Success is not the key to happiness, Happiness is the key to success",
            "Believe you can and you're halfway there",
            "Push yourself, because no one else is going to do it for you",
            "Great things never come from comfort zones",
            "Dream it. Wish it. Do it",
            "Success doesn't just find you You have to go out and get it",
            "The harder you work for something the greater you'll feel when you achieve it",
            "Dream bigger Do bigger",
            "Don't stop when you're tired Stop when you're done",
            "Wake up with determination Go to bed with satisfaction",
            "Dream it Believe it Build it",
            "Success doesn't just come and find you You have to go out and get it",
            "The only limit to our realization of tomorrow is our doubts of today",
            "Work hard in silence let success be your noise",
            "The key to success is to focus on goals not obstacles",
            "Dream it Believe it Achieve it",
            "Small steps in the right direction can turn out to be the biggest step of your life",
            "Hard work beats talent when talent doesn't work hard",
            "Don't watch the clock do what it does Keep going",
            "The future depends on what you do today",
            "Don't wait for opportunity Create it",
            "The best way to predict the future is to create it",
            "Your only limit is you",
            "Push yourself, because no one else is going to do it for you",
            "Octopuses have three hearts and blue blood",
            "Bananas are berries, but strawberries aren't",
            "Wombat poop is cube-shaped to prevent it from rolling away",
            "A day on Venus is longer than a year on Venus",
            "Sharks have been around longer than trees",
            "There are more stars in the universe than grains of sand on all the Earth's beaches",
            "The shortest war in history lasted just 38 to 45 minutes",
            "A single strand of spaghetti is called a 'spaghetto'",
            "Butterflies taste with their feet",
            "Koalas have fingerprints almost identical to human fingerprints",
            "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid",
            "A snail can sleep for three years",
            "There's a species of jellyfish that is biologically immortal",
            "A group of flamingos is called a 'flamboyance'",
            "A full head of human hair is strong enough to support 12 tons",
            "Elephants are the only animals that can't jump",
            "Sea otters hold hands while sleeping to avoid drifting apart",
            "The shortest commercial flight in the world is just 57 seconds long",
            "Polar bear skin is black, not white",
            "The longest recorded flight of a chicken is 13 seconds",
            "In Japan, there's a train station with no entrance or exit; it's just a place for people to sit and watch the trains",
            "The longest time between two twins being born is 87 days",
            "A blue whale's heart is the size of a small car",
            "A cloud can weigh more than a million pounds",
            "The inventor of the Pringles can is buried in one",
            "You can hear a blue whale's heartbeat from over 2 miles away",
            "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion",
            "There's a species of spider called the 'Hobo Spider'",
            "A group of crows is called a 'murder'",
            "The longest time a person has gone without sleep is 11 days",
            "In South Korea, there's a special day dedicated to celebrating single people called 'Black Day'",
            "Humans and giraffes have the same number of neck vertebrae",
            "The dot over the letters 'i' and 'j' is called a 'tittle'",
            "Venus is the hottest planet in our solar system, even though Mercury is closer to the Sun",
            "The longest wedding veil was longer than 63 football fields",
            "Cats have five toes on their front paws, but only four toes on their back paws",
            "In 2006, a team of scientists discovered a new organ in the human body: the interstitium",
            "There are more fake flamingos than real ones in existence",
            "The average person walks the equivalent of three times around the world in a lifetime",
            "Rabbits can't puke",
            "A group of owls is called a 'parliament'",
            "The longest name for a place in the world has 85 letters",
            "The human nose can detect about 1 trillion different scents",
            "There's a tree that can grow a new trunk and root system from a single leaf",
            "Dolphins have names for each other",
            "More people are allergic to cow's milk than any other food",
            "The only letter that doesn't appear in any U.S. state name is 'Q'",
            "The smallest bone in the human body is in the ear and is called the 'stapes'",
            "A group of hedgehogs is called a 'prickle'",
            "The unicorn is Scotland's national animal",
            "A group of pugs is called a 'grumble'",
            "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion",
            "An octopus has three hearts and blue blood",
            "Cows have best friends and get stressed when they are separated",
            "There are more possible iterations of a game of chess than there are atoms in the known universe",
            "The original name for the search engine Google was 'Backrub'",
            "The longest hiccuping spree lasted 68 years",
            "A 'moment' technically refers to 90 seconds",
            "Sloths can hold their breath for up to 40 minutes",
            "There's a species of mushroom called the 'humongous fungus' that covers over 2,000 acres",
            "Bees can recognize human faces",
            "A giraffe's neck contains the same number of vertebrae as a human neck, only much larger",
            "The moon has moonquakes, just like earthquakes on Earth",
            "A day on Jupiter is only 10 hours long",
            "The longest word in the English language is pneumonoultramicroscopicsilicovolcanoconiosis",
            "There's a basketball court on the top floor of the U.S. Supreme Court",
            "A group of jellyfish is called a 'smack'",
            "The average person will spend about six months of their life waiting for red lights to turn green",
            "There are more trees on Earth than stars in the Milky Way galaxy",
            "You can't hum while holding your nose",
            "The inventor of the microwave oven only received $2 for his discovery",
            "The shortest complete sentence in the English language is 'I am'",
            "The longest word you can type using only your left hand is 'stewardesses'",
            "There's a species of ant called the 'exploding ant', which sacrifices itself to protect the colony",
            "The first product to have a barcode was Wrigley's gum",
            "The longest time between the birth of twins is 87 days",
            "A group of frogs is called an 'army'",
            "Some cats are allergic to humans",
            "A single cloud can weigh more than 1 million pounds",
            "Dolphins have been known to help sick or injured individuals",
            "A leap year is a year that is evenly divisible by 4, except for end-of-century years, which must be divisible by 400",
            "The heart of a shrimp is located in its head",
            "The longest recorded flight of a chicken is 13 seconds",
            "Your nose and ears continue to grow throughout your entire life",
            "A group of porcupines is called a 'prickle'",
            "Elephants are the only mammals that can't jump",
            "The most expensive pizza in the world costs $12,000",
            "A bolt of lightning is five times hotter than the surface of the sun",
            "A 'sneeze' travels out of your mouth at over 100 miles per hour",
            "A goldfish's memory span is not three seconds, as commonly believed, but rather closer to five months",
            "The shortest commercial flight in the world is just 57 seconds long",
            "The first alarm clock could only ring at 4 a.m.",
            "The smell of freshly cut grass is actually a plant distress call",
            "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'",
            "The world's largest snowflake on record was 15 inches wide and 8 inches thick",

        ]
    };

    let currentText = '';
    let previousText = '';
    let sequenceIndex = {
        level1: 0,
        level2: 0,
        level3: 0,
        az: 0,
        word: 0,
        sentence: 0
    }; // Track sequence index for each level

    // Update the text sample based on the selected level
    function updateTextSample() {
        const selectedLevel = levelDropdown.value;
        let newText;

        // Check if Learn checkbox is selected
        if (learnCheckbox.checked) {
            // Generate sequence text if Learn checkbox is selected
            if (levels[selectedLevel]) {
                const levelArray = levels[selectedLevel];
                if (Array.isArray(levelArray)) {
                    newText = levelArray[sequenceIndex[selectedLevel]];
                    sequenceIndex[selectedLevel] = (sequenceIndex[selectedLevel] + 1) % levelArray.length; // Cycle through the array
                } else {
                    newText = getRandomElement(levelArray);
                }
            }
        } else {
            // Generate random text based on the selected level
            if (selectedLevel === 'word') {
                newText = getRandomElement(levels.word);
            } else if (selectedLevel === 'sentence') {
                newText = getRandomElement(levels.sentence);
            } else {
                newText = getRandomElement(levels[selectedLevel]);
            }
        }

        // Ensure new text is different from previous text
        while (newText === previousText) {
            newText = getRandomElement(levels[selectedLevel]);
        }

        currentText = newText;
        previousText = currentText;
        textSample.textContent = currentText;
        textSample.style.textAlign = 'center'; // Center-align text sample

        // Update the maximum length of the user input field
        userInput.maxLength = currentText.length;
        userInput.value = ''; // Clear the input field for a new round
    }

    // Get a random element from an array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function handleUserInput() {
        const inputText = userInput.value;
        const selectedLevel = levelDropdown.value;

        if (selectedLevel === 'word' || selectedLevel === 'sentence') {
            // For "Word" or "Sentence", show feedback without clearing the input box
            if (inputText === currentText) {
                setResult('Correct!', 'green', 'bold');
                updateTextSample(); // Automatically skip to the next random word/sentence
            } else {
                // Check if the user has typed any incorrect character
                if (!currentText.startsWith(inputText)) {
                    setResult('Incorrect, Try Again', 'red', 'bold');
                } else {
                    setResult('', '', ''); // Clear feedback as long as they're typing correctly
                }
            }
        } else {
            let isCorrect;
            if (selectedLevel === 'level1' || selectedLevel === 'az') {
                // For Level 1 and A-Z, perform case-insensitive comparison
                isCorrect = inputText.toLowerCase() === currentText.toLowerCase();
            } else if (selectedLevel === 'level2' || selectedLevel === 'level3') {
                // For Level 2 and Level 3, perform case-insensitive comparison
                isCorrect = inputText.toLowerCase() === currentText.toLowerCase();
                if (!isCorrect) {
                    userInput.value = ''; // Clear user input if Level 2, Level 3, or A-Z is incorrect
                }
            }

            if (isCorrect) {
                setResult('Correct!', 'green', 'bold');
                userInput.value = ''; // Clear user input
                updateTextSample(); // Update text sample for the next round
            } else {
                // Clear the text box and show "Incorrect, Try Again" for levels 1, 2, 3, and A-Z
                userInput.value = ''; // Clear the user input
                setResult('Incorrect, Try Again', 'red', 'bold');
            }
        }
    }

    // Set result feedback with color and style
    function setResult(text, color, fontWeight) {
        result.textContent = text;
        result.style.color = color;
        result.style.fontWeight = fontWeight;
    }

    // Handle level change
    function handleLevelChange() {
        const selectedLevel = levelDropdown.value;
        checkboxes.style.display = (selectedLevel === 'sentence' || selectedLevel === 'word') ? 'none' : 'block';
        updateTextSample(); // Update text sample whenever the level changes
    }

    // Skip button functionality
    function handleSkip() {
        userInput.value = ''; // Clear user input
        setResult('', '', ''); // Clear feedback
        updateTextSample(); // Update text sample for the next round
    }

    // Toggle only one checkbox selected at a time
    function toggleCheckbox(selectedCheckbox) {
        // Ensure that only the selected checkbox is checked
        if (selectedCheckbox === learnCheckbox) {
            practiceCheckbox.checked = false;
        } else {
            learnCheckbox.checked = false;
        }
    }

    // Event listeners
    userInput.addEventListener('input', handleUserInput);
    levelDropdown.addEventListener('change', handleLevelChange);
    skipButton.addEventListener('click', handleSkip);
    learnCheckbox.addEventListener('change', () => {
        if (learnCheckbox.checked) {
            toggleCheckbox(learnCheckbox);
        }
        updateTextSample(); // Update text sample when Learn checkbox changes
    });
    practiceCheckbox.addEventListener('change', () => {
        if (practiceCheckbox.checked) {
            toggleCheckbox(practiceCheckbox);
        }
        updateTextSample(); // Update text sample when Practice checkbox changes
    });

    // Initialize the page
    handleLevelChange(); // Initialize by updating text sample and handling level change
});