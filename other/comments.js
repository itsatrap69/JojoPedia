
// Add comments (as divs)
let comments = document.getElementById("comments");

const submitButton = document.getElementById("submitComment");

submitButton.addEventListener("click", () => {

       let commentInput = document.getElementById("commentInput")
       const newComment = document.createElement("div");
       newComment.className = "commentClass"
       newComment.innerHTML = commentInput.value;

       const date = new Date;
       const dateElement = document.createElement("div");
       dateElement.textContent = date;
       dateElement.className = "dateClass"

       comments.appendChild(dateElement);
       comments.appendChild(newComment);
});

