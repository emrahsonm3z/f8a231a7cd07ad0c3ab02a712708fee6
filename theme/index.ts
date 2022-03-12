type Colors = {
  primary: string
  secondary: string
  textColor: string
  textMute: string
}

type Theme = {
  colors: Colors
}

const colors: Colors = {
  primary: '#f39200',
  secondary: '#289cc4',
  textColor: '#343a40',
  textMute: '#868e96'
}

export const theme: Theme = { colors }
