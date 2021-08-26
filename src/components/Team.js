import React from "react"
export const Team = (props) => {
    return (
      <div id='team' className='text-centered'>
        <div className='container'>
          <div>
            <h2>Meet the Team</h2>
             <h1>Avengers Assemble</h1> 
          </div>
          <div id='row' className="responsive">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'>
                      {' '}
                      <img src={d.img} alt='...' className='team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }