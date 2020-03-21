export const contacts = () => {
  return db.contact.findMany()
}
