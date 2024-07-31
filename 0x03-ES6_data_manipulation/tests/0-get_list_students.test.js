// tests/0-get_list_students.test.js
const getListStudents = require('../src/0-get_list_students');

describe('getListStudents', () => {
  test('returns an array of student objects', () => {
  const students = getListStudents();
  expect(students).toHaveLength(3);

  expect(students).toEqual(
  expect.arrayContaining([
    expect.objectContaining({ id: 1, firstName: 'Guillaume', location: 'San Francisco' }),
    expect.objectContaining({ id: 2, firstName: 'James', location: 'Columbia' }),
  expect.objectContaining({ id: 5, firstName: 'Serena', location: 'San Francisco' }),
    ])
   );
  });
});

