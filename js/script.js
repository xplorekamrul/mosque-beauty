// autotype text effect start 
var typed = new Typed(".txt-rotate", {
    strings: ["Md.Kamruzzaman", "Rafid Hasan", "Niazul Islam", "Ariful Islam"],
    typeSpeed: 150,
    backSpeed:50,
    looped:true
  });
// autotype text effect end
//Counter up start
$('.counter').counterUp({
  delay: 10,
  time: 2500
});



//Counter up end
// 3d text effect start 
const Texts=[
  'HTML', 'CSS', 'JAVASCRIPT',
  'TELWIN CSS','NODE JS','REACT',
  'PYTHON','JAVA', 'JQUERY','JAVA',
  'C#','MY SQL', 'GITHUB','C++',
  'Photoshop', 'Illustrator',"c",
  'Figma'
];
var tagCloud = TagCloud('.sphere', Texts,{
  //sphere radius in px
  radius:170,

  //animation speed 
  maxSpeed:'normal',
  initSpeed:'fast',

  //rolling direction
  direction:135,

  //interaction with mouse 
  keep:true,

});

  // sphere color 
  var color = '#0deb32';
  document.querySelector('.sphere').style.color = color;

// 3d text effect end


// mixitup code start 

var containerEl = document.querySelector('.gallarycontent');

var mixer = mixitup(containerEl);
// mixitup code end


// slick slider start 

// console.log("hello world");
// $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
//     nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
//     dots:true,
    
//   });


$('.slider').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
  nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
  dots:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// slick slider end
