  
const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Youtube',
    url: 'https://www.youtube.com',
    description: 'Where you find vidoes of anything',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4 },

]

module.exports = { bookmarks }