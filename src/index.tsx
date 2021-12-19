import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react'
import '@ionic/react/css/core.css'
import { createRoot } from 'react-dom'

setupIonicReact()

createRoot(document.getElementById('root')).render(<IonApp>
  <IonPage style={{ backgroundColor: 'black !important' }}>
    <IonHeader>
      <IonToolbar>
        <IonTitle>My Title</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      Hello World
    </IonContent>
  </IonPage>
</IonApp>)