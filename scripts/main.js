// Hero carousel
let slideIndex=0;
showSlides();
function showSlides(){
  let slides=document.getElementsByClassName("carousel-slide");
  for(let i=0;i<slides.length;i++){slides[i].style.display="none";}
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1;}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,5000);
}

// Inquiry form - email submission
document.getElementById("inquiryForm").addEventListener("submit", function(e){
  e.preventDefault();
  const formData = new FormData(this);
  const mailBody = `
    Name: ${formData.get('name')}
    Phone: ${formData.get('phone')}
    Date: ${formData.get('date')}
    Time: ${formData.get('time')}
    Message: ${formData.get('message')}
  `;

  // Use EmailJS (or similar service) to send email without redirect
  emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', { message: mailBody })
    .then(() => { document.getElementById("formMessage").innerText="Inquiry sent successfully!"; this.reset(); })
    .catch(() => { document.getElementById("formMessage").innerText="Failed to send. Try again."; });
});