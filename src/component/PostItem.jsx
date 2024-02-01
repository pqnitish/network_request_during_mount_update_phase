function PostItem({posts,page}){
    console.log(posts);
    return(
        <div>
            {posts.map((post)=>{

                return<div className="post-details" key={post.id}>
                    {page}
                    <h3>Title:{post.title}</h3>
                    <p>UserId:{post.userId}</p>
                    <p>Description:{post.body}</p>
                    
                </div>
            })}
        </div>
    )
}
export default PostItem;