// Reducers
export const songsReducer = () => {
  return [
    {title: 'Dont Worry Be Happy', duration: '3:45'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '3:15'},
    {title: 'No Scrubs', duration: '4:05'}
  ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}
