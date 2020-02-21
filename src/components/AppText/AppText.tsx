import React, { ReactNode, HTMLAttributes } from 'react'
import { IonSkeletonText } from '@ionic/react'
export interface AppTextProps
  extends HTMLAttributes<HTMLIonSkeletonTextElement> {
  loading: boolean
  children: ReactNode
}

const AppText: React.FC<AppTextProps> = props => {
  if (props.loading) {
    return <IonSkeletonText animated {...props}></IonSkeletonText>
  }
  return <>{props.children}</>
}

export default AppText
