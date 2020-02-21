import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonSkeletonText
} from '@ionic/react'
import './AppCard.css'

export interface AppCardProps {
  loading: boolean
  header: string | number
  content: string | number
  symbol?: string
}
const AppCardLoadingHeader: React.FC<AppCardProps> = props => {
  return props.loading ? (
    <IonSkeletonText animated className='loading-card__currency-name' />
  ) : (
    <>
      <span>{props.header}</span>
      <span>{props.symbol ? props.symbol : ''}</span>
    </>
  )
}

const AppCardLoadingContent: React.FC<AppCardProps> = props => {
  return props.loading ? (
    <IonSkeletonText animated className='loading-card__currency-value' />
  ) : (
    <>{props.content}</>
  )
}

const AppCard: React.FC<AppCardProps> = props => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <AppCardLoadingHeader {...props}></AppCardLoadingHeader>
        </IonCardSubtitle>
        <IonCardTitle>
          <AppCardLoadingContent {...props}></AppCardLoadingContent>
        </IonCardTitle>
      </IonCardHeader>
    </IonCard>
  )
}

export default AppCard
