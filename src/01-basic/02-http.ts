




export const getPokemonById = async (id: string|number) => {

  try {

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name } = await resp.json();
    return name;



  } catch (error: any ) {
    console.log(error.message);
    return null;
    // throw new Error('Pokemon not found');
  }



}