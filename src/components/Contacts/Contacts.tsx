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
              href="mailto: anton.zhytonbaiev.dev@gmail.com"
            >
              anton.zhytonbaiev.dev@gmail.com
            </a>
          </div>
          <p className="dev__text-main"> 
            LinkedIn:&nbsp;&nbsp;
            <a
              className="dev__text-normal"
              href="https://www.linkedin.com/in/anton-zhytonbaiev-2b0070266/?locale=uk_UA"
            >
              Anton Zhytonbaiev
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="http://github.com/Anton-Zhytonbaiev"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">Telegram: @Anton_Zhytonbaiev</p>
          <p className="dev__text-main">City: Kyiv</p>
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
            >
              Kutasevich Bogdan
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="https://github.com/Bogdan-Kutasevich"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">Telegram: @Bogdan_Kutasevich</p>
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
            >
              Polina Sukhorukova
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="https://github.com/PolinaSukhorukova"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">Telegram: @polinasukhorukova</p>
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
            >
              Anton Zhytonbaiev
            </a>
          </p>
          <p className="dev__text-main">
            <a
              className="dev__text-normal"
              href="http://github.com/Anton-Zhytonbaiev"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="dev__information">
          <p className="dev__text-main">Telegram: @Anton_Zhytonbaiev</p>
          <p className="dev__text-main">City: Kyiv</p>
        </div>
      </div>
    </div>
  );
};
