import React, {ChangeEvent} from 'react';
import {parse} from 'marked';
import {MarkedOptions} from "marked";
import {observer} from "mobx-react";
import {observable} from "mobx";
import classes from './admin-create-post-page.module.scss';
import SimpleMDE from "simplemde";
import '../../../third-party/simplemde/css/simplemde.min.css';
import '../../../third-party/simplemde/css/font-awesome.min.css';

/*
Note: We use two libraries to parse markdown. "simplemde" which is an editor with a parser built-in, and "marked", which
we use to generate the HTML to save to the server and to generate the full-screen preview.
 */

class Post {
    title: string = '';
    content: string = '';
    excerpt: string = '';
}

const options: MarkedOptions = {headerIds: false};
const mdOptions: SimpleMDE.Options = {
    autoDownloadFontAwesome: false,
    autofocus: true,
    autosave: {enabled: false, delay: 10000, uniqueId: 'admin-create-post-page--autosave'}, // TODO: Use the ID of an existing post and show if it's locally saved only and it needs to be submitted to the web. Make it transparent to the user.
    forceSync: false,
    placeholder: 'Wanna write?',
    spellChecker: true
};

@observer
export default class AdminCreatePostPage extends React.Component {

    @observable private model = {...new Post()};
    @observable private preview = '';
    private textarea: HTMLTextAreaElement | null = null;

    componentDidMount() {
        const raw = '# Marked in browser\n\nRendered by **marked**.';
        parse(raw, options, (er, as) => console.log('async', as));

        if (this.textarea) {
            const simpleMde = new SimpleMDE({...mdOptions, element: this.textarea});
            simpleMde.codemirror.on('change', () => {
                this.model.content = simpleMde.value(); // Update the raw
                parse(this.model.content, options, (error, parsed) => this.preview = parsed); // TODO: Handle race conditions.
            });
        }
    }

    private onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.model.title = event.target.value;
    };

    private onExcerptChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.model.excerpt = event.target.value;
    };

    public render() {
        return (
            <div className={classes.ctn}>
                <div className={classes.title}>Add New Post</div>
                <input type="text"
                       placeholder="Enter title here"
                       value={this.model.title}
                       onChange={this.onTitleChange}
                />

                <textarea placeholder="Excerpt" value={this.model.excerpt} onChange={this.onExcerptChange}/>
                <textarea ref={ref => this.textarea = ref}/>
                {/*TODO: This second preview is no longer needed, unless it's used as a "full-screen-without-editor-buttons preview.*/}
                <div className={classes.preview} dangerouslySetInnerHTML={{__html: this.preview}}/>
            </div>
        );
    }
}
