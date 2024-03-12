export const IMAGE_URL = (width: number): string => {
  const baseURL = `https://image.tmdb.org/t/p/w${width}`
  return baseURL
}
