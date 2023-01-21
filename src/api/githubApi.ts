import axios from 'axios'

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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' 
  }
})
