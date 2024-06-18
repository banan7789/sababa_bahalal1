document.addEventListener('DOMContentLoaded', function() {
  const starryBackground = document.querySelector('.starry-background');
  const numberOfStars = 100; // מספר הכוכבים שתרצה להוסיף

  // יצירת הכוכבים ברקע
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('span');
    star.classList.add('star');

    // צור מיקומי X ו-Y אקראיים בתוך viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    starryBackground.appendChild(star);
  }

  // הגדרת שקיפות אקראית לכל כוכב
  const stars = document.querySelectorAll('.star');
  setInterval(() => {
    stars.forEach(star => {
      const opacity = Math.random() * 0.8 + 0.2; // צור שקיפות אקראית בין 0.2 ל-1
      star.style.opacity = opacity;
    });
  }, 130); // מרווח זמן לעדכון השקיפות

  // קוד נוסף: טיפול בטופס והודעת תודה
  const contactForm = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // מנע את ההתנהגות ברירת המחדל של הטופס

    thankYouMessage.classList.remove('hidden'); // הצג הודעת תודה
    contactForm.reset();
  });

  // מניעת הפניה ל-Formspree בעת עזיבת העמוד
  window.addEventListener('beforeunload', function(event) {
    if (event.target.action === 'https://formspree.io/f/xyyrrvdr') {
      event.preventDefault();
      event.returnValue = '';
    }
  });

  // התאמת מיקום הכוכבים בהתבסס על גלילת העמוד
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    stars.forEach(star => {
      // הגדל את מיקום ה-top של הכוכב בהתבסס על scrollTop
      star.style.top = `${parseInt(star.style.top) - scrollTop}px`;
    });
  });
});
