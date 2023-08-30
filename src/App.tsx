/* eslint-disable max-len */
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
  'Banana',
];

export const App: React.FC = () => {
  const [selectedGood, setSelectedGood] = useState('');
  const [selectedGoodElement, setSelectedGoodElement] = useState(document.createElement('button'));

  document.querySelector('button')?.parentElement?.classList.add();

  return (
    <main className="section container">
      {!selectedGood && <h1 className="title">No goods selected</h1>}

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}
          {' is selected '}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
              selectedGoodElement.parentElement?.parentElement?.classList.remove('has-background-success-light');
              selectedGoodElement.parentElement?.querySelector('.is-info')?.classList.add('button-hide');
              selectedGoodElement.classList.remove('button-hide');
              setSelectedGoodElement(document.createElement('button'));
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr data-cy="Good" className={good}>
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={(event) => {
                    selectedGoodElement.classList.remove('button-hide');
                    selectedGoodElement.parentElement?.querySelector('.is-info')?.classList.add('button-hide');
                    selectedGoodElement.parentElement?.parentElement?.classList.remove('has-background-success-light');
                    setSelectedGood(good);
                    event.currentTarget.parentElement?.parentElement?.classList.add('has-background-success-light');
                    event.currentTarget.parentElement?.querySelector('.is-info')?.classList.remove('button-hide');
                    event.currentTarget.classList.add('button-hide');
                    setSelectedGoodElement(event.currentTarget);
                  }}
                >
                  +
                </button>

                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info button-hide"
                  onClick={(event) => {
                    event.currentTarget.classList.add('button-hide');
                    selectedGoodElement.classList.remove('button-hide');
                    selectedGoodElement.parentElement?.parentElement?.classList.remove('has-background-success-light');
                    setSelectedGoodElement(document.createElement('button'));
                    setSelectedGood('');
                  }}
                >
                  -
                </button>

              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

          {/* <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr> */}
        </tbody>
      </table>
    </main>
  );
};
