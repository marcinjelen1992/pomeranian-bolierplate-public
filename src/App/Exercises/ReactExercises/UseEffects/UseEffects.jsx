import { useState, useEffect } from 'react';

export const UseEffects = () => {
  //  Funkcja zwrotna to funkcja wewnątrz danego kodu, na przykład useEffect
  // => {tu jest funkcja zwrotna}

  //Kod wewnątrz useEffect wykona się zawsze, jak nastąpi jakaś zmiana (kliknięcie w komponencie, cokolwiek):
  //  useEffect(() => {

  //  })

  //Przy takim zapisie kod wykona tylko jeden raz (pusta tablica zależności):
  //  useEffect(() => {

  //  }, [])

  // Tu kod wykona wtedy lub tylko wtedy jak wystąpi zależność:
  //  useEffect(() => {

  //  }, [zaleznosc])

  // useEffect który ma zwracaną inną funkcję, funkcję czyszczącą:
  //  useEffect(() => {

  // return () => {

  // }

  //  })

  useEffect(() => {});

  useEffect(() => {}, []);

  return <div>Hello useEffect</div>;
};
