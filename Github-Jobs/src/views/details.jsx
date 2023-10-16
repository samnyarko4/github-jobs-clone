import {useParams, useLocation} from 'react-router-dom'


function Details () {
    const params  = useParams(); 
    const location = useLocation()
    const jobInfo = location.state
    const placehold = jobInfo.company_name.charAt(0)
  
    return (
      <>
      <div className='detail-contain'>
      <h1 className='text-left title'>Github <span className='title-jobs'>Jobs</span></h1>
        <div className='grid details-grid'>
            <div className='left-side-details'>
                <button className='details-back flex items-center'><i class="fa-solid fa-arrow-left-long back-icon"></i>Back to search</button>

                <h3 className='how-to-apply text-left'>HOW TO APPLY</h3>

            </div>

            <div className="right-side-details">
            <h1 className='details-title text-left flex'>{jobInfo.title}<span><h4 className="job-ft-pt-detail ">{jobInfo.detected_extensions.schedule_type}</h4></span></h1>
            <p className='clock-icon-detail text-left'><i className="fa-regular fa-clock"></i>{jobInfo.detected_extensions.posted_at}</p>
            
            <div className='comp-grid'>
            { jobInfo.thumbnail ?
              <img src={jobInfo.thumbnail} alt="" className='comp-img-detail row-span-2 self-center' />
              : <div className='comp-img row-span-3  flex justify-center text-center' style={{backgroundColor:'#584932'}}>
                  <p className='img-placehold align-middle self-center'>{placehold}</p>
                </div>
              }

                <h2 className='text-left comp-title-detail'>{jobInfo.company_name}</h2>

                <p className='location-icon-detail'><i className="fa-solid fa-earth-americas"></i>{jobInfo.location}</p>
            </div>
        <p className='detail-text text-left'>{jobInfo.description}</p>
            </div>
        </div>
      </div>
      </>
    );
}
export default Details