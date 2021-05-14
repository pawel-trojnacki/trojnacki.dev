import React from 'react';
import classes from './styles.module.css';

const SmoothScroll: React.FC = ({ children }) => {
  const smoothScroll = (speed: number, smooth: number) => {
    const target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body; // cross browser support for document scrolling

    let moving = false;
    let pos = target.scrollTop;
    const frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target; // safari is the new IE

    target.addEventListener(`mousewheel`, scrolled, { passive: false });
    target.addEventListener(`DOMMouseScroll`, scrolled, { passive: false });

    function normalizeWheelDelta(e: any) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
        // Opera
        return -e.detail / 3; // Firefox
      }
      return e.wheelDelta / 120; // IE,Safari,Chrome
    }

    function update() {
      moving = true;

      const delta = (pos - target.scrollTop) / smooth;

      target.scrollTop += delta;

      if (Math.abs(delta) > 0.5) requestFrame(update);
      else moving = false;
    }

    function scrolled(e: any) {
      e.preventDefault(); // disable default scrolling

      const delta = normalizeWheelDelta(e);

      pos += -delta * speed;
      pos = Math.max(
        0,
        Math.min(pos, target.scrollHeight - frame.clientHeight)
      ); // limit scrolling

      if (!moving) update();
    }

    let requestFrame = (function () {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    })();
  };
  React.useEffect(() => {
    smoothScroll(120, 12);
  }, []);

  return (
    <div className={`smoothScroll ${classes.smoothScrollWrapper}`}>
      {children}
    </div>
  );
};

export default SmoothScroll;
