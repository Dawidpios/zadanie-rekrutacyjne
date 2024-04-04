export const getTags = async () => {
  const result = await fetch('https://api.stackexchange.com/2.3/tags?&site=stackoverflow')
  const data = await result.json()

  return data.items
}