/**
 * Euclidean Distance Score
 * Calculate the euclidean distance between two items in a dataset.
 *
 * @param {object} dataset The dataset containing data about both items that are being compared.
 * @param {string} person1 Item one for comparison.
 * @param {string} person2 Item two for comparison.
 *
 * @returns {float} The euclidean distance score.
 */
export function euclideanDistance(dataset, person1, person2) {
  const si = [];

  for (var key in dataset[person1]) {
    if (dataset[person2][key]) {
      si.push(key);
    }
  }

  if (si.length === 0) {
    return 0;
  }

  let sumOfSquares = 0;

  for (let i = 0; i < si.length; i++) {
    key = si[i];
    sumOfSquares += Math.pow(dataset[person1][key] - dataset[person2][key], 2);
  }

  return 1.0 / (1 + Math.sqrt(sumOfSquares));
}
