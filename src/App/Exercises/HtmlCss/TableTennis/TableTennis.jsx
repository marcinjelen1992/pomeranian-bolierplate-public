import './styles.css';
import { StarIcon } from './StarIcon';

export const TableTennis = () => {
  return (
    <>
      <div>
        <table className="tennis-table">
          <tr className="tennis-table-row">
            <th>Location</th>
            <th>PLAYER_ID</th>
            <th>Rating</th>
          </tr>
          <tr className="tennis-table-row">
            <td>Cape Verde Islands</td>
            <td>#100120</td>
            <td>
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr className="tennis-table-row">
            <td>Cape Verde Islands</td>
            <td>#100122</td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr className="tennis-table-row">
            <td>Cape Verde Islands</td>
            <td>#100124</td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
          <tr className="tennis-table-row">
            <td>United States of America</td>
            <td>#100126</td>
            <td>
              <StarIcon />
            </td>
          </tr>
          <tr className="tennis-table-row">
            <td>United States of America</td>
            <td>#100128</td>
            <td>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
