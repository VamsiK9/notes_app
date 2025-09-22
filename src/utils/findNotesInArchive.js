export const findNotesInArchvive = (archive, id) => {
  return archive.some(note => note.id === id)
}