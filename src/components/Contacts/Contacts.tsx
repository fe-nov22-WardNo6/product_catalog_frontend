import React from 'react';
import './contacts.scss';

export const Contacts: React.FC = () => {
  return (
    <div className="conteiner">
      <div className="dev">
        <p className="dev__name">Borys Andrew</p>
        <div className="dev__information">
          <div className="dev__text-main">
            Email:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="mailto: borysandrew9@gmail.com"
            >
              borysandrew9@gmail.com
            </a>
          </div>
          <p className="dev__text-main">
            LinkedIn:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="https://www.linkedin.com/in/andrew-borys-233365200/"
              target="_blank"
              rel="noreferrer"
            >
              Andrew Borys
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="https://github.com/Borys-Andrew"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">
            Telegram:
            <a
              className="dev__text-main__link"
              href="https://t.me/BorysAndrew"
              target="_blank"
              rel="noreferrer"
            >
              @BorysAndrew
            </a>
          </p>
          <p className="dev__text-main">City: Lviv</p>
        </div>
      </div>

      <div className="dev">
        <p className="dev__name">Kutasevich Bogdan</p>
        <div className="dev__information">
          <p className="dev__text-main">
            Email:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="mailto: anton.zhytonbaiev.dev@gmail.com"
            >
              bogdankutasevich@gmail.com
            </a>
          </p>
          <p className="dev__text-main">
            LinkedIn:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="https://www.linkedin.com/in/bogdan-kutasevich-17b881265/"
              target="_blank"
              rel="noreferrer"
            >
              Kutasevich Bogdan
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="https://github.com/Bogdan-Kutasevich"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">
            Telegram:
            <a
              className="dev__text-main__link"
              href="https://t.me/Bogdan_Kutasevich"
              target="_blank"
              rel="noreferrer"
            >
              @Bogdan_Kutasevich
            </a>
          </p>
          <p className="dev__text-main">City: Zaporizhzhia</p>
        </div>
      </div>

      <div className="dev">
        <p className="dev__name">Sukhorukova Polina</p>
        <div className="dev__information">
          <p className="dev__text-main">
            Email:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="mailto: polina.sukhorukova@gmail.com"
            >
              polina.sukhorukova@gmail.com
            </a>
          </p>
          <p className="dev__text-main">
            LinkedIn:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="https://www.linkedin.com/in/polina-sukhorukova-0274bb228/"
              target="_blank"
              rel="noreferrer"
            >
              Polina Sukhorukova
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="https://github.com/PolinaSukhorukova"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">
            Telegram:
            <a
              className="dev__text-main__link"
              href="https://t.me/polinasukhorukova"
              target="_blank"
              rel="noreferrer"
            >
              @polinasukhorukova
            </a>
          </p>
          <p className="dev__text-main">City: Kharkiv</p>
        </div>
      </div>

      <div className="dev">
        <p className="dev__name">Zhytonbaiev Anton</p>
        <div className="dev__information">
          <p className="dev__text-main">
            Email:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="mailto: anton.zhytonbaiev.dev@gmail.com"
            >
              anton.zhytonbaiev.dev@gmail.com
            </a>
          </p>
          <p className="dev__text-main">
            LinkedIn:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="https://www.linkedin.com/in/anton-zhytonbaiev-2b0070266/?locale=uk_UA"
              target="_blank"
              rel="noreferrer"
            >
              Anton Zhytonbaiev
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="http://github.com/Anton-Zhytonbaiev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">
            Telegram:
            <a
              className="dev__text-main__link"
              href="https://t.me/Anton_Zhytonbaiev"
              target="_blank"
              rel="noreferrer"
            >
              @Anton_Zhytonbaiev
            </a>
          </p>
          <p className="dev__text-main">City: Kyiv</p>
        </div>
      </div>
    </div>
  );
};
