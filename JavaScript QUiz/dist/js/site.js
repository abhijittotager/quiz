
let questions = [
  {
    id: 1,
    question: "I am pleased with way I am",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 2,
    question: "I am pleased with the way i approach life",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 3,
    question: "I am pleased with the way i approach problems",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 4,
    question: "I am rarely insterested in other people",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 5,
    question: "I feel that life is rewarding ",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 6,
    question: "I am committed and involved",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 7,
    question: "i always see the bad in people",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 8,
    question: "My natural instinct is to think the worst ",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 9,
    question: "I am satisfied is to think the worst ",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
  {
    id: 10,
    question: "I rarely trust people ",
    answer: "YES",
    answer0: "NO",
    answer1: "MAY BE ",
    answer2: "DONT KNOW ",
    options: [
      "YES",
      "NO",
      "MAY BE ",
      "DONT KNOW "
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
 

  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 4;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == questions[question_count].answer0) {
    points += 3;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == questions[question_count].answer1) {
    points += 2;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == questions[question_count].answer2) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);
 var a = document.createElement('a');
 var link = document.createTextNode("This is link");


  if(points<=40){
    a.title = "This is Link";
    a.href = "https://www.geeksforgeeks.org";
  }
  else if(points>40&&points<=70){
    console.log("1lib.in/book/5392919/73e73f?dsource=recommend")
  }
  else{
    console.log("https://www.youtube.com/watch?v=1QY7VgqvHW0&list=PLEOl5Hpac2BxhO01jGOyuTRm1rj-G4Lwv&index=20")
  }


  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
