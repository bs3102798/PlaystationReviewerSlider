const userId = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null,
}
const userComment = document.querySelector(".usercomment")
const submitBtn = document.querySelector("#publish")
const comments = document.querySelector(".comments")
const userName = document.querySelector(".user")

userComment.addEventListener('input', e => {
    if (!userComment.value) {
        submitBtn.setAttribute("disabled", "disabled");
        submitBtn.classList.remove("abled")
    } else {
        submitBtn.removeAttribute("disabled");
        submitBtn.classList.add("abled")
    }
})

function addPost() {

    if (!userComment.value) return;
    userId.name = userName.value;
    if (userId.name === "Anonymous") {
        userId.identity = false;

    } else {
        userId.identity = true;
        userId.image = "user.png"

    }

    userId.message = userComment.value;
    userId.date = new Date().toLocaleString();

    let published = `
    <div class = "parents">
    <img src = "../images/playstation.jpg"> 

    <div>
    <h1>${userId.name}</h1>
    <p>${userId.message}</p>
    <div class= "engagements"><img src="../images/like.png"><img src="../images/dislike.png"></div>
    <span class="date">${userId.date}</span>
    </div>
    
    </div>
    
    `;

    comments.innerHTML += published;
    userComment.value = "";

}
submitBtn.addEventListener("click", addPost)