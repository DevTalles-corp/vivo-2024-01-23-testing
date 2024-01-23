import { describe, expect, test } from 'vitest';
import { countArguments } from './../../src/01-basic/01-counters';


describe('countArguments', () => {

  test('conteo de argumentos', () => {
  
    const args = [1,2,3,4,5,6,7,8,9,10];
  
    const result = countArguments(...args);
  
    expect(result).toBe(args.length);
  
  })
  
  test('no hay argumentos', () => {
  
  
    const result = countArguments();
  
    expect(result).toBe(0);
  
  })

})


