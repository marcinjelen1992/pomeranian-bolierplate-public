import './styles.css';

const BANDS = [
  {
    band: 'The Clash',
    yearFormed: 1976,
    albums: 6,
    mostFamousSong: 'London Calling',
  },
  {
    band: 'Sex Pistols',
    yearFormed: 1975,
    albums: 1,
    mostFamousSong: 'Anarchy in tke UK',
  },
  {
    band: 'Ramones',
    yearFormed: 1974,
    albums: 14,
    mostFamousSong: 'Blitzkrieg Bop',
  },
  {
    band: 'The Cure',
    yearFormed: 1976,
    albums: 13,
    mostFamousSong: 'Just Like Heaven',
  },
  {
    band: 'Joy Division',
    yearFormed: 1976,
    albums: 2,
    mostFamousSong: 'Love Will Tear Us Apart',
  },
  {
    band: 'Siouxsie and the Banshees',
    yearFormed: 1976,
    albums: 11,
    mostFamousSong: 'Hong Kong Garden',
  },
];

export const ArrayRendering2Table = () => {
  return (
    <>
      <table className="array-table">
        {BANDS.map((item) => {
          return (
            <tr>
              <th key={item.id} id={item.id}>{`${item.band}`}</th>
              <td
                key={item.id}
                id={item.id}
              >{`${item.yearFormed} ${item.albums} ${item.mostFamousSong}`}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
