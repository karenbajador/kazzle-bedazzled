import React from 'react'

const PostListItem = ({post}) => {
    return (
        <div className='blog-post-list-item'>
            PHOTO HERE (if exist)<br />
            Category<br />
            Title: Post #{post.id}<br />
            Excerpt...<br />
            Button centered<br />
            hr rule<br />
            author + social<br />
        </div>
    )
}

export default PostListItem