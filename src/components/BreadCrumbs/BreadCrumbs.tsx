import React from 'react';
import './breadCrumbs.scss';
import arrow from '../../icons/arrowRight.svg';
import home from '../../icons/home.svg';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const BreadCrumbs: React.FC = () => {
  const breadcrumbs = useBreadcrumbs();
  // console.log(breadcrumbs);

  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumbs__home">
        <img src={home} alt="Home" />
      </Link>
      {breadcrumbs.map(({ match, breadcrumb, location }, index) =>
        !index ? (
          ''
        ) : (
          <React.Fragment key={index}>
            <div className="breadcrumbs__arrow">
              <img src={arrow} alt="/" />
            </div>
            <Link
              key={match.pathname}
              to={match.pathname}
              className={cn('breadcrumbs__link', {
                'breadcrumbs__link--is-active':
                  match.pathname === location.pathname,
              })}
            >
              {breadcrumb}
            </Link>
          </React.Fragment>
        ),
      )}
    </div>
  );
};
