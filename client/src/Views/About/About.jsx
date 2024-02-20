import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVtaleQNm2jfhavwPcXHCTvHkb4vvBeiijA&usqp=CAU"
        alt="pokemon"
        className={styles.image}
      />

      <h1 className={styles.title}>Hi I´am Francisco Contreras</h1>
      <h2 className={styles.subtitle}>
        I am a HENRY student preparing to be a FULL-STACK Web Developer, and
        this little app is a reflection of the evolution in my career as a
        programmer Pokemons
      </h2>
    </div>
  );
};

export default About;
