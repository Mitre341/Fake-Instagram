const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]




function renderPosts() {
let name =  document.getElementById("name");
name.textContent = posts[0].name;


let location = document.getElementById("location");
location.textContent = posts[0].location;

let avatar = document.getElementById("avatar");
avatar.src = posts[0].avatar;

let post = document.getElementById("post");
post.src = posts[0].post;


let likes = document.getElementById("likes");
likes.textContent = posts[0].likes + " likes";
let likeBtn = document.getElementById("like-btn");
likeBtn.addEventListener("click", function() {
    posts[0].likes++;
    likes.textContent = posts[0].likes + " likes";
})


let username = document.getElementById("username");
username.textContent =  posts[0].username;



    
}

renderPosts();



