import React from 'react'
import { Link} from 'react-router-dom'
function Home() {

    const backgroundImageStyle = {
        backgroundImage: 'url("https://wallpaperaccess.com/full/1772317.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      };
  return (
    <>
      <div style={{...backgroundImageStyle, height: '100vh'} } className='w-100 d-flex justify-content-center align-items-center rounded border shadow'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: '80px' }}><i class="fa-brands fa-pagelines"></i>Education</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt at facilis assumenda vero non quasi sapiente veniam exercitationem totam temporibus rem nisi numquam facere sint, quas delectus? Atque, reiciendis?</p>
                            
                            <Link to={'/register'} className='btn btn-warning'>Register<i class="fa-solid fa-right-long ms-2"></i></Link>
                            
                           
                          
                        </div>
                        <div className="col-lg-6">
                            <img style={{ height: '800px' }} src='' />
                        </div>
                    </div>
                </div>
                </div>
    </>
  )
}

export default Home