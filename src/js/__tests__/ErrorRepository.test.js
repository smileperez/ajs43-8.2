import ErrorRepository from '../ErrorRepository';

test(('Должен создаться новый класс ErrorRepository (Map) с ошибками'), () => {

  const errors = new ErrorRepository();
  errors.map.set(403, 'SIP - User Disabled');
  errors.map.set(499, 'SIP - Codec Mismatch');
  errors.map.set(603, 'SIP - Decline');

  const expected = new Map();
  expected.set(403, 'SIP - User Disabled');
  expected.set(499, 'SIP - Codec Mismatch');
  expected.set(603, 'SIP - Decline');
  
  expect(errors.map).toEqual(expected);
});

test(('Должен выполняться методо translate() или выводиться ошибка'), () => {
  
  const errors = new ErrorRepository();
  errors.map.set(403, 'SIP - User Disabled');
  errors.map.set(499, 'SIP - Codec Mismatch');
  errors.map.set(603, 'SIP - Decline');

  expect(errors.translate(500)).toBe('Unknown error');
  expect(errors.translate(403)).toBe('SIP - User Disabled');
  expect(errors.translate(404)).toBe('Unknown error');
  expect(errors.translate(499)).toBe('SIP - Codec Mismatch');
});