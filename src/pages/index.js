
import styles from '../styles/Home.module.css'
import IconCorpName from '../components/IconCorpName';
export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>

        <IconCorpName viewBox="0 0 381.17 68.88"
          sx={{ fill: "blue", fontSize: 200 }}
        ></IconCorpName>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>


    </div>
  )
}
