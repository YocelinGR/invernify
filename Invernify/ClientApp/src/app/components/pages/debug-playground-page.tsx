import React from 'react';
import {createMock} from "../../../mocks/post-feed-mock";
import PostPreview from "../common/post-preview";

/**
 * Use this page to play and test new components.
 *
 * Consider not committing changes made to this file, this component should stay as a blank playground.
 */
export default class DebugPlaygroundPage extends React.Component {
    public render() {
        let image = 0;
        return (
            <div>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
                <PostPreview post={createMock(`http://local-lorem-content/${++image}.jpg`)}/>
            </div>
        );
    }
}
