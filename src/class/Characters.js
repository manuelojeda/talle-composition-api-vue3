import { ref } from 'vue'
import axios from 'axios'

class Characters {
  personajes

  constructor () {
    this.personajes = ref(null)
  }

  getCharacters () {
    return this.personajes
  }

  async fetch() {
    const response = await axios({
      url: 'https://rickandmortyapi.com/api/character'
    })

    this.personajes.value = await response.data.results
  }
}

export default Characters
