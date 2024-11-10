var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
});

let availableKeywords = [
  'Birthday',
  'Wedding',
  'Sports',
  'Concert',
  'Cultural',
  'Destination',
  'Corporate Events',
  'College Events',
  'Cultural and Community Events'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
      result = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
  }
  display(result);
};

function display(result) {
  const content = result.map((list) => {
      return "<li onclick='selectInput(this)'>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = ""; 
  navigateToLink(list.innerHTML);
}

function navigateToLink(keyword) {
  let links = {
      'Birthday': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/College%20Project/Evento/Birthday.html',
      'Wedding': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/College%20Project/Evento/Marriage.html',
      'Sports': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/College%20Project/Evento/Sports.html',
      'Concert': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/College%20Project/Evento/Concert.html',
      'Cultural': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/College%20Project/Evento/cultural.html',
      'Destination': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/Evento/Marriage.html',
      'Corporate Events': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/Evento/Marriage.html',
      'College Events': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/Evento/Marriage.html',
      'Cultural and Community Events': 'file:///C:/Users/manth/OneDrive/Documents/My%20learning/.HTML/Evento/Marriage.html'
  };
  window.location.href = links[keyword];
}
