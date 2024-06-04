import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }: any) {

    function handleDeleteComment() {
        alert('Deletando comentário');
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/TonelliMG.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raphael Tonelli</strong>
                            <time title='11 de Maio às 08:00' dateTime='2022-05-11 08:00:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}