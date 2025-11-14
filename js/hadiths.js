// Hadiths data and modal functionality
const hadiths = [
  { text: "The best among you are those who have the best manners and character.", source: "Sahih al-Bukhari 3559" },
  { text: "Kindness is a mark of faith, and whoever is not kind has no faith.", source: "Sahih Muslim 78" },
  { text: "The strong person is not the one who can wrestle, but the one who controls himself when angry.", source: "Sahih al-Bukhari 6114" },
  { text: "None of you truly believes until he loves for his brother what he loves for himself.", source: "Sahih al-Bukhari 13, Sahih Muslim 45" },
  { text: "The most beloved of people to Allah are those who are most beneficial to people.", source: "Al-Mu'jam al-Awsat 5787" },
  { text: "A good word is charity.", source: "Sahih al-Bukhari 2989, Sahih Muslim 1009" },
  { text: "The believer does not slander, curse, or speak in an obscene or foul manner.", source: "Sunan al-Tirmidhi 1977" },
  { text: "Whoever believes in Allah and the Last Day should speak good or remain silent.", source: "Sahih al-Bukhari 6018, Sahih Muslim 47" },
  { text: "Make things easy and do not make them difficult, cheer the people up and do not drive them away.", source: "Sahih al-Bukhari 69" },
  { text: "The seeking of knowledge is obligatory for every Muslim.", source: "Sunan Ibn Majah 224" },
  { text: "Allah does not look at your appearance or wealth, but He looks at your hearts and deeds.", source: "Sahih Muslim 2564" },
  { text: "The best charity is that given in Ramadan.", source: "Sunan al-Tirmidhi 663" },
  { text: "Whoever removes a worldly grief from a believer, Allah will remove from him one of the griefs of the Day of Judgment.", source: "Sahih Muslim 2699" },
  { text: "The most complete of the believers in faith are those with the best character.", source: "Sunan al-Tirmidhi 1162" },
  { text: "Richness is not having many possessions, but richness is being content with oneself.", source: "Sahih al-Bukhari 6446, Sahih Muslim 1051" }
];

export function initHadithModal() {
  const hadithModal = document.getElementById('hadithModal');
  const hadithText = document.getElementById('hadithText');
  const hadithSource = document.getElementById('hadithSource');
  const hadithModalClose = document.getElementById('hadithModalClose');
  const nextHadithBtn = document.getElementById('nextHadith');

  function showRandomHadith() {
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    const hadith = hadiths[randomIndex];
    hadithText.textContent = hadith.text;
    hadithSource.textContent = `— ${hadith.source}`;
    hadithModal.classList.add('show');
  }

  function closeHadithModal() {
    hadithModal.classList.remove('show');
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      showRandomHadith();
    }, 2000);
  });

  hadithModalClose.addEventListener('click', closeHadithModal);

  hadithModal.addEventListener('click', (e) => {
    if (e.target === hadithModal) {
      closeHadithModal();
    }
  });

  nextHadithBtn.addEventListener('click', showRandomHadith);

  // Floating button
  const hadithFloatBtn = document.createElement('div');
  hadithFloatBtn.className = 'hadith-float';
  hadithFloatBtn.innerHTML = '<i class="fas fa-book-quran"></i>';
  hadithFloatBtn.title = 'Read Hadith';
  hadithFloatBtn.addEventListener('click', showRandomHadith);
  document.body.appendChild(hadithFloatBtn);
}
