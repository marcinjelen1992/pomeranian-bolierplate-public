import './styles.css';
import { useState, useEffect } from 'react';

export const This = () => {
  const myObject = {
    name: 'Jeremy',
    classicGreet: function () {
      console.log(this.name);
    },
    // Tu this odnosi się do obiektu więc pokazuje Jeremy w console.logu
    arrowGreet: () => {
      console.log(this.name);
    },
    // metoda strzałkowa wskazuje na miejsce wywoływania, arrow function nie ma dostępu do thisa, dlatego wywala undefined
  };

  // const arrowGreet = myObject.arrowGreet.apply(null, [myObject.name]);
  // to powyżej powinno uruchomić arrowGreet, ale nie uruchamia

  console.log(myObject.classicGreet());

  return (
    <>
      <div className="thisCssPage">
        <div></div>
        <div>placeholder</div>
      </div>
    </>
  );
};
