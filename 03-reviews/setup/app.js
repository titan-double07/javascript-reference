// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const c = console.log.bind(console);
const buttons = document.querySelectorAll("button");
const image = document.querySelector("#person-img");
const author = document.querySelector("#author");
const position = document.querySelector("#job");
const info = document.querySelector("#info");
// const [obj1, obj2, obj3, obj4] = reviews;
let click = 0;

// load initial item
window.addEventListener('DOMContentLoaded',()=>{
assign(reviews[click])

})
// c(reviews[0])
//butons 
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    const btnClass = e.currentTarget.classList;

    if (btnClass.contains("next-btn")) {
      click +=1;
      if (click > reviews.length-1) click = 0;
      assign(reviews[click]);
      c(click)
    }

    if (btnClass.contains("prev-btn")) {
      click -= 1;
      if (click < 0) click = reviews.length-1;
      assign(reviews[click]);
      c(click)

    }

    if (btnClass.contains("random-btn")) {
      click = Math.floor(Math.random()*reviews.length);
      assign(reviews[click]);
      c(click)
    }

    

  });
}
function assign(obj) {
  const { id, name, job, img, text } = obj;
  image.src = img;
  author.innerHTML = name;
  position.innerHTML = job;
  info.innerHTML = text;

}


