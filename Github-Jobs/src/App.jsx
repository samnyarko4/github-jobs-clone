import { useState } from 'react'

import img from './assets/download.jpg'
import Card from './components/card'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {




  const [loading, setLoading] = useState(false)
  const [q, Setq] = useState('')
  const [openlo, setOpenlo] = useState('')
  const [location, setLocation] = useState('')
  const [data, Setdata] = useState({})
  const [pn, setPn] = useState(0)
 

  const handleSearch = (q) => {
    setLoading(true)
    searchJobs(q, location, pn)
      }

      const handleLocation = (q, location) =>{
        setLoading(true)
        if (q.trim() === '') {
          Setq(location);
        searchJobs(location,location,pn)
      }
      else{
        searchJobs(q, location,pn)
      }
    }

      const handlePageClick = (pagenumber) => {
        setPn(pagenumber);
        handleSearch(q)
      }

      const searchJobs = (q) => {
       
            fetch(`https://serpapi.com/search.json?engine=google_jobs&q=${q}&location=${location}&start=${pn}&hl=en&api_key=62634145bf29692a91e2fef184e628904fc193112c837fa6c7bf32c5b03d50ae`)
          .then(response => {
            return response.json()
          })
          .then(data => {
              Setdata(data)
              console.log(data)
              setLoading(false)
        })
    }
      

  return (
    <>
      <div>
        <h1 className='text-left title'>Github <span className='title-jobs'>Jobs</span></h1>
        <div className='contain  grid-rows-3'>
          <div className='search-section col-span-2 flex'>
            <div className='search-bar self-center '>
            <input type="text" className='searchbar' placeholder= 'Title, companies, expertise or benifits' value={q} onChange={(event) => Setq(event.target.value)} onKeyPress={(event) => {
    if (event.key === 'Enter') {
      handleSearch(q);}
    }}/>
            <button className='search-btn' onClick={() => handleSearch(q)}>Search</button>
            </div>
          </div>

          {/* ---------------------
                   sidebarr
          ----------------------*/}

          <div className="row-span-2 sidebar">
            <span className='flex'>
          <input type='checkbox' className='checkbox' />
          <p className='w-fit'>Full time</p>
            </span>
            <span className='flex '>
            <input type='checkbox' className='checkbox' />
          <p className='w-fit' >Part time</p>
            </span>

            <h2 className='text-left location-title'>LOCATION</h2>
            <input type="text" placeholder='City,state,zip code or country' className='location-search' value={location} onChange={(event) => setLocation(event.target.value)} onKeyPress={(event) => {
    if (event.key === 'Enter') {
      handleLocation(location)
     }
    }}/>

            <form action="" className='grid location-form text-left'>
              
              <span className='flex'>
              <input type="radio" name="London" id="london" className='self-center' />
              <label htmlFor="london">London</label>
              </span>

              <span className='flex'>
              <input type="radio" name="Amsterdam" id="amsterdam" className='self-center'/>
              <label htmlFor="amsterdam">Amsterdam</label>
              </span>

              <span className='flex'>
              <input type="radio" name="Newyork" id="newyork" className='self-center' />
              <label htmlFor="newyork">New York</label>
              </span>

              <span className='flex'>
              <input type="radio" name="Berlin" id="berlin" className='self-center'/>
              <label htmlFor="berlin">Berlin</label>
              </span>
            </form>
        </div>
      
      <div className='right-side row-span-2'>
      {loading ? (
    <div className="loading">
      <svg className="spinner" viewBox="0 0 50 50">
  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
</svg>
    </div>
  ) : (
          
          <div className='grid grid-col-1 cards-grid'>

        
 
        {data.jobs_results ? <span>{data.jobs_results.map((job, index) => (
  <Card key={job.job_id} job={job}></Card>
))}</span> : null }
          </div>
  )}
      </div>

      {data.jobs_results ?
          <div className='col-span-2 flex justify-end'>
            <button onClick={() => {
                    if (q.trim() === '') {
                      handlePageClick(0, location);
                    } else {
                      handlePageClick(0, q, location);
                    }
            }}>1</button>
            <button onClick={() => {
                    if (q.trim() === '') {
                      handlePageClick(10, location);
                    } else {
                      handlePageClick(10, q, location);
                    }
            }}>2</button>
            <button onClick={() => {
                    if (q.trim() === '') {
                      handlePageClick(20, location,location);
                    } else {
                      handlePageClick(20, q, location);
                    }
              }}>3</button>
            <button onClick={() => {
                    if (q.trim() === '') {
                    handlePageClick(30, location);
                     } else {
                    handlePageClick(30, q, location);
                    }
            }}>4</button>
          </div>
          : null }


    </div>
    
   </div>
   <Outlet />
    </>
  )
}

export default App
