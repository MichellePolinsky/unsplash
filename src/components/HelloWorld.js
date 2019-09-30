import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PhotoPage = () => {
  const [displayPhotos, setDisplayPhotos] = useState([])

  const fetchData = async () => {
    const resp = await axios.get('https://api.unsplash.com/photos', {
      // params: { query: term },
      headers: {
        Authorization:
          'Client-ID a43c3e64f885a5c06277e2508ad66961ba50161b989c6c8f2c97cf6634b7eff7'
      }
    })
    console.log(resp.data)
    setDisplayPhotos(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <p></p>
      {displayPhotos.map((displayPhotos, i) => {
        return (
          <section>
            <div className="image-cont">
              <img className="images" src={displayPhotos.urls.small} alt={''} />
            </div>
            <div>
              <h3 key={i}>{displayPhotos.user.first_name}</h3>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default PhotoPage
