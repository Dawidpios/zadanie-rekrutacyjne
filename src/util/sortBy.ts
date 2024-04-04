export const sortArray = (array, sortOrder, sortBy) => {
  if (sortOrder === 'asc') {
    return array.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  } else if (sortOrder === 'desc') {
    return array.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
  } else {
    console.error('Invalid sort order.');
    return array;
  }
};