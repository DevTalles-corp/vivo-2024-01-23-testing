import { expect, test } from 'vitest';
import { sum } from '../../src/01-basic/sum';

test('adds two numbers', () => {
  // Arrange
  const num1 = 0;
  const num2 = 0;

  // Act
  const result = sum( num1, num2 );

  // Assert
  expect(result).toBe( num1 + num2 );

  // if ( sum(1,3) !== 3 ) {
  //   throw new Error('No es 3');
  // }

  // expect(sum(1, 2)).toBe(3)
});