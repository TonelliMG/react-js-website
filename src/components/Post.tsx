import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }: any) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: (ptBR as any),
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: (ptBR as any),
        addSuffix: true,
    })

    function handleCreateNewComment(event: any) {
        event.preventDefault();
        if (!newCommentText.trim()) {
            return;
        }
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleCreateNewCommentChange(event: any) {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: any) {
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== comment;
        })

        setComments(commentsWithoutDeleted);
    }

    return (
        <article className={styles.post}>
            
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line: { type: any, content: any }) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
 
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea onChange={handleCreateNewCommentChange} value={newCommentText} name='comment' placeholder='Deixe um comentário' required></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} deleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}