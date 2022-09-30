import React from 'react';
import style from '../css/Style.module.css';

function Quote() {
  return (
    <>
      <section className={style.block}>
        <h1 className={style.quote}>
          &quot;Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding.&quot;
        </h1>
        <span className={style.author}>- William Paul Thurston</span>
      </section>
    </>
  );
}

export default Quote;
