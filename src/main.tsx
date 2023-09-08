import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={null}>
    <div></div>
  </Suspense>
)
