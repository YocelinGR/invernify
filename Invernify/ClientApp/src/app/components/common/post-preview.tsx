import React from 'react';
import PostFeed from "../../../models/post-feed";
import classes from './post-preview.module.scss';

type PostPreviewProps = {
    post: PostFeed;
};

const PostPreview = ({post}: PostPreviewProps) => {
    return (
        <article className={classes.ctn}>
            <div className={classes.image} style={{backgroundImage: `url("${post.thumbnail}")`}}>
                <div className={classes.tag}>{post.tags[0]}</div>
            </div>
            <header className={classes.heading}>
                <h3 className={classes.title}>{post.title}</h3>
                <div className={classes.summary}>{post.summary}</div>
            </header>
        </article>
    );
};

export default PostPreview;