import React from 'react';
import classes from './styles.module.css';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={`${classes.wrapper} container`}>
        <a href="mailto:trojnacki.p@outlook.com" className={classes.item}>
          <img
            src="/svg/icons/email.svg"
            alt="email"
            className={classes.icon}
          />
          <span>trojnacki.p@outlook.com</span>
        </a>
        <a href="https://github.com/pawel-trojnacki" className={classes.item}>
          <img
            src="/svg/icons/github.svg"
            alt="github"
            className={classes.icon}
          />
          <span>github.com/pawel-trojnacki</span>
        </a>
        {` `}
        <p className={classes.item}>&copy; {year} Paweł Trojnacki</p>
      </div>
    </footer>
  );
};

export default Footer;
