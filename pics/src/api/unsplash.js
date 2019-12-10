import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2d2767d8962b5064f338741a6d554e823e3a75656bb953d58dfbef7bf31ee1ab'
  }
})
