// util.test.ts

import {constructUrl} from "./util";

test('constructUrl should handle parameters with special characters correctly', () => {
  const params = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
  };

  const expectedUrl = 'http://localhost/api/endpoint?name=John%20Doe&age=30&city=New%20York';

  expect(constructUrl(params, 'endpoint')).toBe(expectedUrl);
});

test('constructUrl should not append a "?" when no parameters are present', () => {
  const params = undefined;
  const url = 'users';
  const expectedUrl = 'http://localhost/api/users';
  expect(constructUrl(params, url)).toBe(expectedUrl);
});

