import { getPokemonById } from './../../src/01-basic/02-http';
import { beforeEach, describe, expect, test, vi } from 'vitest';



describe('http', () => {


  const logSpy = vi.spyOn( console, 'log' );

  beforeEach(() => {
    vi.clearAllMocks();
  });


  
  test('should return pokemon Name', async() => {

    const pokemonId = 1; // Bulbasaur
    const pokemonName = 'bulbasaur';

    const result = await getPokemonById(pokemonId);
   
    expect(result).toBe(pokemonName);

  });

  test('should return null if pokemon not found', async() => {

    const pokemonId = 100000; // not found
    const result = await getPokemonById(pokemonId);
    expect(result).toBe(null);
  });


  test('should called fetch', async() => {

    const pokemonId = 1; // Bulbasaur
    const errorMessage = 'Pokemon not found'

    vi.spyOn( globalThis, 'fetch' ).mockRejectedValue({
      message: errorMessage
    });

    const result = await getPokemonById(pokemonId);


    expect(result).toBe(null);
    expect(logSpy)
      .toHaveBeenCalledWith(errorMessage);

  });





});

