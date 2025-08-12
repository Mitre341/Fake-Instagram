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


// document.getElementById("name").textContent  = posts[0].name;
// document.getElementById("location").textContent = posts[0].location;
// document.getElementById("small-pic").src = posts[0].avatar;
// document.getElementById("post").src = posts[0].post;
// document.getElementById("likes").textContent = posts[0].likes + " likes"; 

// document.getElementById("username").textContent = posts[0].username;
// document.getElementById("comment").textContent = posts[0].comment;

// function renderPost(index){
//     document.getElementById("name").textContent  = posts[index].name;
//     document.getElementById("location").textContent = posts[index].location;
//     document.getElementById("small-pic").src = posts[index].avatar;
//     document.getElementById("post").src = posts[index].post;
//     document.getElementById("likes").textContent = posts[index].likes + " likes";
//     document.getElementById("username").textContent = posts[index].username;
//     document.getElementById("comment").textContent = posts[index].comment;
// }

function renderAllPosts() {
    let container = document.querySelector(".feed");
    container.innerHTML ="";
    for (let i = 0; i < posts.length; i++) {
        let postHtml =`
        <div class="container">
            <img id="small-pic" class="glava round-pic" src="${posts[i].avatar}" alt="Vangogh profile picture "> 
            <h1>${posts[i].name}</h1>
            <h2>${posts[i].location}</h2>
            <img class="post" src="${posts[i].post}" alt="">
            <div class="post-info">
                <img id="like" onclick="increaseLikes(${i})" class="like" src="images/icon-heart.png" alt="like icon">
                <img class="like" src="images/icon-comment.png" alt="comment icon">
                <img class="like" src="images/icon-dm.png" alt="share icon">
            </div>
            <h1 id="likes" class="likes">${posts[i].likes} likes</h1>
            <h1 class="caption">${posts[i].username} <span class="normal-letters">${posts[i].comment}</span></h1>
        </div>

        `;
        container.innerHTML += postHtml;               
            }
        }
    
renderAllPosts();





    let broj = 0;




function increaseLikes(i){
        
        broj += 1;
         document.querySelectorAll(".likes").textContent = broj + " likes";
    
        
    }

// function increaseLikes(i) {
//     posts[i].likes++;
//     document.getElementsByClassName("likes").textContent = posts[i].likes + " likes";
// }





