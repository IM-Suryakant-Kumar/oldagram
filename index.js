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

const postsEl = document.getElementById("posts-el")
renderPosts()

const postEl = document.querySelectorAll(".post-el")

for(let i = 0; i < postEl.length; i++) {
    postEl[i].addEventListener("dblclick", function(e) {
    
    for(let j = 0; j < posts.length; j++) {
        let targetSrc = e.target.src.split("images").slice(1).join("")
        let postsSrc = posts[j].post.split("images").slice(1).join("")
        
        console.log(targetSrc, postsSrc)
        
        if(postsSrc === targetSrc) {
            posts[j].likes += 1;
        }
    }
    
    renderPosts()
})
}


function renderPosts() {
    let postList = ""
    for(let i = 0; i < posts.length; i++) {
        postList += `
            <section>
                <div class="container">
                    <div class="post-header">
                        <img src="${posts[i].avatar}">
                        <div>
                            <h1 class="name font-bold">${posts[i].name}</h1>
                            <h1 class="location">${posts[i].location}</h1>
                        </div>
                    </div>
                    <img class="post-el post-avatar" src="${posts[i].post}">
                    <div class="post-activity">
                        <div class="icons">
                            <img id="like-btn-el" src="images/icon-heart.png">
                            <img id="comment-btn-el" src="images/icon-comment.png">
                            <img id="dm-btn-el" src="images/icon-dm.png">
                        </div>
                        <p class="font-bold">${posts[i].likes} likes</p>
                        <p class="comments"><span class="font-bold">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
            </section>
        `
    }
    postsEl.innerHTML = postList;
}
