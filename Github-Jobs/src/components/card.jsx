import img from '../assets/download.jpg'
import {Link} from 'react-router-dom'
function Card (props) {
  const job = props.job
 const index = job.company_name
 const placehold = job.company_name.charAt(0)

    return(
<Link to={`/details/${index}`} state={job}>
        <div className='card'>
              <div className='grid grid-cols-2 card-grid'>

              { job.thumbnail ?
              <img src={job.thumbnail} alt="" className='comp-img row-span-3 self-center' />
              : <div className='comp-img row-span-3  flex justify-center text-center' style={{backgroundColor:'#584932'}}>
                  <p className='img-placehold align-middle self-center'>{placehold}</p>
                </div>
              }
              <h2 className='company-name text-left'>{job.company_name}</h2>
              <h3 className='job-title text-left'>{job.title}</h3>
              <span className='flex justify-between'>
              <h4 className="job-ft-pt ">{job.detected_extensions.schedule_type}</h4>
              <span className='flex'>
              <p className='location-icon'><i className="fa-solid fa-earth-americas"></i>{job.location}</p>
              {job.detected_extensions.posted_at ? <p className='clock-icon'><i className="fa-regular fa-clock"></i> {job.detected_extensions.posted_at}</p> : null}
              </span>
              </span>
              </div>
            </div>
            </Link>
)
}

export default Card