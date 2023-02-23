//[CRUD] CREATE - READ - UPDATE - DELETE

const miniKoo = {
    users : [
        {
            username: 'xampson',
        }
    ],
    posts : [
        {
            id: 1,
            owner: 'xampson',
            content: 'Batman'
        }
    ]
}

function createPost(data){
    miniKoo.posts.push({
        id: miniKoo.posts.length +1,
        owner: data.owner,
        content: data.content
    })
}

const post1 = {owner:'ababa',content:'abri um koo'};

createPost(post1);

function readPosts(){
    return miniKoo.posts;
}

console.log(readPosts());

function updatePost(id,newContent){
    const postUpdated = readPosts().find((post)=>{
        return post.id === id;
    })
    console.log(postUpdated);
    postUpdated.content = newContent;
}

updatePost(1,'xampas');

function deletePost(id){
    const updatedPostLists = readPosts().filter((currentPost)=>{
        return currentPost.id != id;
    })
    miniKoo.posts = updatedPostLists;
}

deletePost(1);

console.log(readPosts());