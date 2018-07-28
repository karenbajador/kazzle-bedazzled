import React from 'react'
import PostListItem from '../blog/post_list_item'


const PostList = () => {
    return (
        <div classNamne='blog-post-list'>
            <PostListItem post={{id: 1}} />
            <PostListItem post={{id: 2}} />
            <PostListItem post={{id: 3}} />
        </div>
    )
}


export default PostList