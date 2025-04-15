import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries'
import Bountries from './components/bountries';

function App() {

  const CountriesPromise = fetch('https://restcountries.com/v3.1/all').then(res => res.json());

    const KountriesPromise = fetch('https://restcountries.com/v3.1/all').then(res =>res.json());

  return (
    <>
    {/* <Suspense fallback={<h3>Loading countries</h3>}>
    <Countries CountriesPromise={CountriesPromise}></Countries>
    </Suspense> */}

    <Suspense fallback={<h3>Loading Countries ......</h3>}>
      <Bountries KountriesPromise={KountriesPromise}></Bountries>
      </Suspense>
    </>
  )
}

export default App
