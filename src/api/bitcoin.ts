export interface BitcoinResponse {
  bpi: any
  time: any
  disclaimer: string
  chartName: string
}

export const getBitcoinPrice = async (): Promise<
  BitcoinResponse | undefined
> => {
  try {
    const response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json'
    )
    return response.json()
  } catch (error) {
    console.error(error)
  }
}
