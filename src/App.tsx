import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

function App() {
  return (
    <ApiReferenceReact
      configuration={{
        url: 'https://api.api-fiddle.com/v1/public/resources/oas_api_3_1/joshuaisikwes-organization-p6c/wise-cat-m4d4',
      }}
    />
  )
}

export default App
