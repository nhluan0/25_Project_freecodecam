export const RgbToHex = (number) => {
  let rs = ''
  let mod = number % 16
  let divide = Math.floor(number / 16)
  mod = Convert(mod)
  divide = Convert(divide)
  rs = `${divide}${mod}`

  return rs
}
export const Convert = (number) => {
  let rs = ''
  if (number == 10) rs = 'A'
  else if (number == 11) rs = 'B'
  else if (number == 12) rs = 'C'
  else if (number == 13) rs = 'D'
  else if (number == 14) rs = 'E'
  else if (number == 15) rs = 'F'
  else rs = `${number}`
  return rs
}
export const RandomNumber = () => {
  let rs = Math.floor(Math.random() * 256)
  return rs
}
