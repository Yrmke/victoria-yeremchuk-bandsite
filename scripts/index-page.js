// API

const apiKey = "8d7811c5-bb68-4bf0-8d6a-efe34ee81cfa";
const usersURL = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;
const commentList = document.querySelector(".posted-comments");

  axios
  .get(usersURL)
  .then((response) => {
    console.log(response.data);

    response.data.reverse().forEach(displayComment);
  })
  .catch(function (error) {
    console.log(error);
  });

function displayComment(comment) {

  // FORMATTED TIMESTAMP
  const date = new Date(comment.timestamp);
  const commentEl = document.createElement("div");
  commentEl.classList.add("posted-comment");
  commentList.appendChild(commentEl);
  // empty profile picture
  const profileImageElement = document.createElement("div");
  profileImageElement.classList.add("posted-comment__pic");
  commentEl.appendChild(profileImageElement);

  // comment content

  // const includeContent = () =>{
  const commentElement = document.createElement("div");
  commentElement.classList.add("posted-comment__name");
  commentEl.appendChild(commentElement);

  // name
  const nameElement = document.createElement("p");
  nameElement.classList.add("posted-comment__name");
  nameElement.innerText = comment.name;
  commentEl.appendChild(nameElement);
  console.log(nameElement);
  // date
  const dateElement = document.createElement("p");
  dateElement.classList.add("posted-comment__date");
  dateElement.innerText = date.getMonth()+1  + '/' +  date.getDate() + '/' + date.getFullYear();
  commentEl.appendChild(dateElement);

  // description
  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("posted-comment__description");
  descriptionElement.innerText = comment.comment;
  commentEl.appendChild(descriptionElement);
}


const form = document.querySelector(".comments-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.userName.value;
  const comment = e.target.userComment.value;

  const newComment = {
    name: name,
    comment: comment,
  };

axios
  .post(usersURL, newComment)
  .then((response) => {
      console.log(response.data);

axios
  .get(usersURL)
  .then((response) => {
    commentList.innerHTML = ''
    console.log(response.data);

    response.data.reverse().forEach(displayComment);
  })
  .catch(function (error) {
    console.log(error);
  });

// we have posted!!
    })
    .catch(function (error) {
      console.log(error);
    });

 
}
