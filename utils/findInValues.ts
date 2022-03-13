export const findInValues = <T>(arr: T[], value): T[] => {
  const text = String(value).toLowerCase()
  return arr.filter((field: T) =>
    Object.entries(field).some((entry) => String(entry[1]).toLowerCase().includes(text))
  )
}
