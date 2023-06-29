// css
import styles from './Apresentacao.module.css';

// Image
import girlAndCat from '../../../public/assets/girlAndCat.jpg';

const Apresentacao = () => {
  return (
<section className={styles.apresentacao}>

    <div className={styles.content}>
        <h1 className={styles.apresentacaoTitle}>Olá,</h1>
        <p className={styles.apresentacaoText}>Me chamo <span>Rayane Magdalena</span><br/> e eu sou desenvolvedora Front-end</p>
    </div>

    <img src={girlAndCat} alt="ilustração de uma menina digitando no notebook" className={styles.apresentacaoImg}/>

</section>
  )
}

export default Apresentacao