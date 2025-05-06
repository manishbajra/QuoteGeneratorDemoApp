const quotes = [
    { text: "Science is magic that works.", category: "science" },
    { text: "The important thing is to never stop questioning.", category: "science" },
    { text: "Believe you can and you're halfway there.", category: "inspiration" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "inspiration" }
  ];
  
  let currentIndex = 0;
  let currentCategory = 'all';
  let fontSize = 16;
  
  const quoteText = document.getElementById('quote-text');
  const categorySelect = document.getElementById('category-select');
  const themeSwitch = document.getElementById('theme-switch');
  
  const getFilteredQuotes = () => {
    return currentCategory === 'all' ? quotes : quotes.filter(q => q.category === currentCategory);
  };
  
  const displayQuote = () => {
    const filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length === 0) {
      quoteText.textContent = 'No quotes available for this category.';
      return;
    }
    currentIndex = (currentIndex + filteredQuotes.length) % filteredQuotes.length;
    quoteText.textContent = filteredQuotes[currentIndex].text;
  };
  
  document.getElementById('next-quote').addEventListener('click', () => {
    currentIndex++;
    displayQuote();
  });
  
  document.getElementById('prev-quote').addEventListener('click', () => {
    currentIndex--;
    displayQuote();
  });
  
  document.getElementById('random-quote').addEventListener('click', () => {
    const filteredQuotes = getFilteredQuotes();
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    displayQuote();
  });
  
  categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    displayQuote();
  });
  
  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitch.checked);
  });
  
  document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 2;
    quoteText.style.fontSize = fontSize + 'px';
  });
  
  document.getElementById('decrease-font').addEventListener('click', () => {
    fontSize = Math.max(10, fontSize - 2);
    quoteText.style.fontSize = fontSize + 'px';
  });
  
  // Initial display
  displayQuote();
  