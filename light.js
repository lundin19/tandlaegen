let slideIndex = 1; /* Det er hvor min slide starter. altså den starter på det første billede der bliver trykket på. */
showSlide(slideIndex);

function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block'; /* hvad der bliver displayed i når man åbner lightboxen. */
  }
  
  function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none'; /* Det er så hvad der bliver displayed i når lightboxen bliver lukket ned igen. */
  };

  function changeSlide(n) { /* Det er hvilket slide den skifter til når jeg trykker næste slide */
    showSlide(slideIndex += n);
  };
  
  function toSlide(n) { /* Det er hvilket slide der bliver skiftet til, altså det næste billede der bliver skiftet til */
    showSlide(slideIndex = n);
  };

  function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');
  
    if (n > slides.length) {
      slideIndex = 1;	
    };
    
    if (n < 1) {
      slideIndex = slides.length;
    };
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    };
    
    for (let i = 0; i < modalPreviews.length; i++) {
      modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };
    
    slides[slideIndex - 1].style.display = 'block';
    modalPreviews[slideIndex - 1].className += ' active';
  };