export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  return db.contact.create({ data: input })
}
