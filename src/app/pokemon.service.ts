import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor() { }

  async getPokemon(name: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Pokémon data', error);
      return null;
    }
  }
}
