// Css
import styles from "./Sobre.module.css";

// Image
import sobreMim from "../../../public/assets/sobreMim.jpg";

const Sobre = () => {
  return (
    <section className={styles.sobre}>
      <img
        src={sobreMim}
        alt="foto da Rayane com uma arte ao redor"
        className={styles.sobreImg}
      />

      <div className={styles.sobreText}>
        <h2>Sobre mim</h2>
        <p>
          Atualmente estudo Análise e Desenvolvimento de Sistemas e estou
          participando de um Bootcamp de Desenvolvedor Web, onde foquei meus
          estudos em Front-end - HTML I CSS I JavaScript. Já posso dizer que
          estou apaixonada e com muita vontade de me aperfeiçoar. <br />
          Sou formada em odontologia há 5 anos e durante minha trajetória como
          dentista aprendi a trabalhar em equipe focando sempre nos melhores
          resultados possíveis tanto para a equipe quanto para o paciente. Sou
          uma pessoa detalhista e responsável e acredito que a boa comunicação é
          capaz de resolver grandes problemas.
        </p>

        <div className={styles.sobreLinks}>
          <a
            className={styles.sobreLinksItem}
            href="https://www.linkedin.com/in/rayane-magdalena-473b83163/"
            target="_blank" >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a
            className={styles.sobreLinksItem}
            href="https://www.instagram.com/rayanemagdalena/"
            target="_blank" >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a
            className={styles.sobreLinksItem}
            href="https://github.com/RayaneMagdalena"
            target="_blank" >
            <ion-icon name="logo-github"></ion-icon>
          </a>
       
        </div>
      </div>
    </section>
  );
};

export default Sobre;
