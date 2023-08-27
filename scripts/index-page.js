const comments = [
  {
    name: "Connor Walton",
    description:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
  },
  {
    name: "Emilie Beach",
    description:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
  },
  {
    name: "Miles Acosta",
    description:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beau",
    date: "12/20/2020",
  },
];
//          <div class="previous-comment">
//             <div class="previous-comment__pic"></div>
//             <div class="previous-comment__content">
//             <p class="previous-comment__name">Connor Walton</p>
//             <p class="previous-comment__date">02/17/2021</p>
//             <p class="previous-comment__description">
//                 This is art. This is inexplicable magic expressed in the
//                 purest way, everything that makes up this majestic work
//                 deserves reverence. Let us appreciate this for what it
//                 is and what it contains.
//             </p>
//             </div>
//          </div>

const displayComment = (comment) => {
  const commentList = document.querySelector(".posted-comments");

  const commentEl = document.createElement("div");
  commentEl.classList.add("previous-comment");
  commentList.appendChild(commentEl);
  // empty profile picture
  const profileImageElement = document.createElement("div");
  profileImageElement.classList.add("previous-comment__pic");
  commentEl.appendChild(profileImageElement);

  // comment content
  
  // const includeContent = () =>{
  const commentElement = document.createElement("div");
  commentElement.classList.add("previous-comment__name");
  commentEl.appendChild(commentElement);

  // name
  const nameElement = document.createElement("p");
  nameElement.classList.add("previous-comment__name");
  nameElement.innerHTML = comment.name;
  commentEl.appendChild(nameElement);

  // date
  const dateElement = document.createElement("p");
  dateElement.classList.add("previous-comment__date");
  dateElement.innerHTML = comment.date;
  commentEl.appendChild(dateElement);

  // description
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("previous-comment__description");
  descriptionElement.innerHTML = comment.description;
  commentEl.appendChild(descriptionElement);
};

for (let index = 0; index < comments.length; index++) {
    const comment = comments[index];
    displayComment(comment)
    
}

//  NEW COMMENTS
// const

// // BUTTOON
// const button = document.querySelector(".comments-form__button");
// button.addEventListener("click", defaultComments);

const form = document.querySelector('.comments-form')

form.addEventListener('submit', handleSubmit)

// let timestamp = Date.now();
// console.log(timestamp);

// let d = newDate(timestamp);
// console.log(d);
let d = new Date();
let date = d.getDate();
let month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
let year = d.getFullYear();
let dateStr = date + "/" + month + "/" + year;

function handleSubmit (e) {
    e.preventDefault()
    const name = e.target.userName.value
    const comment = e.target.userComment.value

    console.log(name, comment)

    const newComment = {
        name: name,
        description: comment,
        date: dateStr,
    }
    displayComment(newComment)
}


/*
Create htlm form

style the form section

use DOM to add dynamic html 

create an array of 3 default comments

Comments must have a name, a timestamp, and the comment text

Make function called displayComment() that takes in one comment 
object as a parameter and displays it on the page using JavaScript DOM manipulation

*/
