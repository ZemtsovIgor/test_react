import {useState} from 'react';

function Component() {
  const [values, setValues] = useState({});

  const width = [1, 2, 3];
  const height = [1, 2, 3];

  const clickHandler = (rowIndex, collIndex) => {
    setValues(prev => ({
        ...prev,
        [`${rowIndex}${collIndex}`]: values[`${rowIndex}${collIndex}`] === 'X' ? '0' : 'X',
      })
    );
  };

  return (
    <div className="App">
      <table>
        <tbody>
        {
          height.map((_, index) => (<tr
            key={`${index + 1}`}
            className="table_row"
          >
            {width.map((_, collIndex) => (
              <td key={`${index + 1}${collIndex + 1}`} className="table_coll">
                <button
                  className="table_value"
                  onClick={() => clickHandler(index, collIndex)}
                >
                  {values[`${index}${collIndex}`] ? values[`${index}${collIndex}`] : ''}
                </button>
              </td>
            ))}
          </tr>))
        }
        </tbody>
      </table>
    </div>
  );
}

export default Component;
