import React from 'react';
import styles from './Footer.module.scss';
import arrowIcon from './img/Vector.svg';
import logo from './img/Logo.svg';

export const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    console.log('to top');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.footer__list}>
          <li className={styles.footer__list_item}>
            <a
              className={styles.footer__list_link}
              href="https://github.com/orgs/fe-nov22-WardNo6/repositories"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className={styles.footer__list_item}>
            <a className={styles.footer__list_link} href="#">
              Contacts
            </a>
          </li>
          <li className={styles.footer__list_item}>
            <a className={styles.footer__list_link} href="#">
              Rights
            </a>
          </li>
        </ul>
        <div className={styles.footer__top}>
          <span className={styles.footer__top__text}>Back to top</span>
          <div className={styles.footer__top__button} onClick={handleClick}>
            <img className={styles.arrowIcon} src={arrowIcon} alt="to top" />
          </div>
        </div>
      </div>
    </footer>
  );
};
