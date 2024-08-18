import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item
      .querySelector('.faq-content-question')
      .addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        faqItems.forEach(i => i.classList.remove('active'));

        if (!isActive) {
          item.classList.add('active');
        }
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    onOpen: function (currentElement) {
      console.log('Opened:', currentElement);
    },
    onClose: function (currentElement) {
      console.log('Closed:', currentElement);
    },
  });
});
