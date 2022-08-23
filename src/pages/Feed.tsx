import React, { useEffect, useState } from "react"
import { Photo } from "../models/photo"
import PhotoView from "../component/PhotoView"
import "./feed.css"

const Feed = () => {
  //keeping track of an array type photo
  const [getPhotos, setPhotos] = useState<Photo[]>([])
  useEffect(() => {
    // pull the ig-clone-backend photos form localhost:4312
    fetch("http://localhost:4312/photos")
      .then((res) => res.json())
      .then((photosReply: Photo[]) => {
        setPhotos(photosReply)
      })
  }, [])

  return (
    <>
      <h1>The bear</h1>
      <div>
        {getPhotos.map((photos: Photo) => {
          return (
            <PhotoView key={photos._id} photo={photos} setPhotos={setPhotos} />
          )
        })}
      </div>
    </>
  )
}

export default Feed
