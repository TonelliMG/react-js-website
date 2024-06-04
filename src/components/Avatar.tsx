import styles from './Comment.module.css';

export function Avatar({ hasBorder = true, src }:any) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    );
}