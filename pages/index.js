import { SignInd } from '../components/SignInd'
import { MyButton } from '../components/Button'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    <SignInd/>
     <MyButton name="Enviar"/>
    </div>

    </>


  )
}
