
(async () => {
    setTimeout(async () => {
    await fetch('http://localhost:3000/blogs')
        .then(response => response.json())
        .then(
            data => {
                const blogPosts = document.getElementById("container");
                data.posts.forEach((post) => {
                    const blogPostContainer = document.createElement("div");

                    const title = document.createElement('h1');
                    const description = document.createElement('p');
                    const button = document.createElement('button');
                    
                    button.innerText = "View post";
                    button.id = post._id;
                    button.onclick = async (e) => {
                        
                        await fetch(`http://localhost:3000/blogs/${e.target.id}`)
                        .then(response=>response.json())
                        .then(data=>console.log(data.blog))
                        .catch((err) => {console.log(err)});
                    }
                    title.textContent=post.title;
                    description.textContent=post.description;
                    
                    blogPostContainer.appendChild(title);
                    blogPostContainer.appendChild(description);
                    blogPostContainer.appendChild(button);

                    blogPosts.appendChild(blogPostContainer);
                })
            }
        )
        .catch(error => console.error(`Eroare la fetch: ${error}`)); 
    },1000)
})()
