import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/PontoIniSistemas.png',
      name: 'João iNi',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat.', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/igorrabelo.png',
      name: 'Caio iNi',
      role: 'Desenvolvedor Protheus'
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum dolor.', },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, inventore.', },
      { type: 'link', content: 'jane.design/testedesign' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}