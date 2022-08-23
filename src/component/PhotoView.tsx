import React from "react"
import { Photo } from "../models/photo"
import { getPhotos, updateLike } from "../services/photoServices"

interface PhotoViewProp {
  photo: Photo
  setPhotos: Function
}

const PhotoView = ({ photo, setPhotos }: PhotoViewProp) => {
  async function handleLike(photoId: string) {
    const newLike = await updateLike(photoId)
    console.log(newLike)
    setPhotos((getPhotos: Photo[]) => {
      return getPhotos.map((photo: Photo) => 
        photo._id === photoId ? { ...photo, likes: newLike } : photo
    )
    })
  }
  return (
    <>
      <div>
        <h2>{photo.description || ""}</h2>
        <img src={photo.photoUrl} alt="a big freaking bear"/>
        <div
          onClick={() => {
            handleLike(photo._id || "")
          }}
        >
          👍 {photo.likes || 0}
        </div>
      </div>
    </>
  )
}

export default PhotoView
