import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Home</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Contact</a>
        </li>
        <li className="list-inline-item">
          <a href="#">@2022 Lumyri</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
