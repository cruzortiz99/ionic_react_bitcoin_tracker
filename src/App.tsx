import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import { IonApp, IonContent, IonIcon } from '@ionic/react'
import { logoBitcoin } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { BitcoinResponse, getBitcoinPrice } from './api/bitcoin'
import './App.css'
import AppCard from './components/AppCard/AppCard'
import AppText from './components/AppText/AppText'

interface AppBitcoinState extends BitcoinResponse {
  bpiArray: { code: string; rate: '' }[]
}

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [bitcoinInfo, setBitcoinInfo] = useState<AppBitcoinState>({
    bpi: {},
    chartName: '',
    disclaimer: '',
    time: {},
    bpiArray: [
      { code: '', rate: '' },
      { code: '', rate: '' }
    ]
  })

  useEffect(() => {
    getBitcoinPrice().then(response => {
      if (response) {
        const bpiArray = Object.keys(response.bpi).map(key => {
          return response.bpi[key]
        })
        setTimeout(() => {
          setBitcoinInfo({ ...response, bpiArray })
          setLoading(false)
        }, 500)
      }
    })
  }, [])
  return (
    <IonApp>
      <IonContent>
        <section className='bitcoin__header'>
          <IonIcon icon={logoBitcoin} className='bitcoin__logo'></IonIcon>
        </section>
        <section>
          {bitcoinInfo.bpiArray.map((price: any, key) => {
            return (
              <AppCard
                loading={loading}
                header={price.code}
                content={price.rate}
                key={key}
              ></AppCard>
            )
          })}
        </section>
        <section className='bitcoin_disclaimer'>
          <AppText loading={loading} className='bitcoin_disclaimer_loading'>
            <p className='bitcoin__disclaimer_text'>{bitcoinInfo.disclaimer}</p>
          </AppText>
        </section>
      </IonContent>
    </IonApp>
  )
}

export default App
