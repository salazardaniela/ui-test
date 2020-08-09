import isNull from 'lodash/isNull';

const nameStorage = 'votes';

/**
 * setResults function
 * @param {Object} {
 *  itemResults: {Object} with results in each polling
 * }
 */
export const setResults = ({ itemResults }) => {
  let results = {};

  if (!isNull(localStorage.getItem(nameStorage))) {
    results = JSON.parse(localStorage.getItem(nameStorage));
  }

  results = itemResults;
  localStorage.setItem(nameStorage, JSON.stringify(results));
};

/**
 * getResults function
 * @param {Object} {
 *  idName: 'key to identify each result value'
 * }
 */
export const getResults = ({ idName }) => {
  const initialValues = {};
  initialValues[idName] = {
    up: 1,
    down: 1,
    total: 2,
  };
  let actualValues = {};

  if (localStorage.getItem('votes')) {
    actualValues = JSON.parse(localStorage.getItem(nameStorage));

    if (actualValues[idName]) {
      return actualValues;
    }

    return { ...initialValues, ...actualValues };
  }

  setResults({ itemResults: initialValues });

  return initialValues;
};
