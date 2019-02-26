import numeral from 'numeral'

export const formatMonney = (value) => numeral(value).format('0,0.00')
