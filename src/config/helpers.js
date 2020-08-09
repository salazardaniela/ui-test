import isEmpty from 'lodash/isEmpty';

const nameStorage = 'votes';
const getStorage = localStorage.getItem(nameStorage);

/**
 * getResults function
 * @param {Object} {
 *  idName: 'key to identify each result value'
 * }
 */
export const getResults = ({ idName }) => {
  let actualValues = {
    up: 1,
    down: 1,
    total: 2,
  };

  if (!isEmpty(getStorage)) {
    actualValues = JSON.parse(getStorage);
    return actualValues[idName];
  }

  return actualValues;
};

/**
 * setResults function
 * @param {Object} {
 *  idName: 'key to identify each result value'
 *  itemResults: {Object} with results in each polling
 * }
 */
export const setResults = ({ idName, itemResults }) => {
  let results = {
    idName: itemResults,
  };

  if (!isEmpty(getStorage)) {
    results = JSON.parse(getStorage);

    results[idName] = itemResults;
  }

  localStorage.setItem(nameStorage, JSON.stringify(results));
};
