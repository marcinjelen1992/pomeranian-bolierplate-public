import './styles.css';

export function Exercise() {
  const animal = { type: 'cat', age: 'six', name: 'sernik' };
  animal.age = 'eight';
  console.log(animal);
  let string1 = 'Jon Snow';

  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to: ${string1}`;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje na stringach</h2>
        <p>Ulubiony bohater z serialu "Gra o tron" to {string1}</p>
        <p>
          Ulubiony bohater z serialu "Gra o tron" to
          <span className="variable-string-placeholder">{string1}</span>
        </p>
        <p>{string2}</p>
        <p>{string3}</p>
        {/* Uzupełnij zanie korzystając ze zmiennych oraz operacji na stringach */}
        <p>
          Witaj ____! Jesteś ____ uzytkownikiem odwiedzającym tę stronę! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Tempora, enim!
        </p>
      </section>
    </div>
  );
}
