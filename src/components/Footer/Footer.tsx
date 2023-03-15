import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <img src="" alt="" />
      </div>
      <ul>
        <li className={styles.footer_link}>
          <a
            href="https://github.com/orgs/fe-nov22-WardNo6/repositories"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className={styles.footer_link}>
          <a href="#">Contacts</a>
        </li>
        <li className={styles.footer_link}>
          <a href="#">Rights</a>
        </li>
      </ul>
      <div>
        <span className={styles.footer__toTopText}>Back to top</span>
        <div>^</div>
      </div>
    </footer>
  );
};
