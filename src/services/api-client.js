import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a6980712194745b487ce89a9f055e595',
  },
})
