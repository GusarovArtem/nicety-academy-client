import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/Pagination.css';

function Pagination() {
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  // const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    if (fetching) {
      console.log('fetching')
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=18&page=${currentPage}`)
        .then(response => {
          setPhotos([...photos, ...response.data]);
          // setPhotos(response.data)
          setCurrentPage(prevState => prevState + 1)
          // setTotalCount(response.headers['x-total-count'])
        })
        .finally(() => setFetching(false))
        // .then(response => setPhotos(response.data))
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) { // && (photos.length < totalCount)
      setFetching(true)
    }
  }

  return (
    <div className="pagination">
      {photos.map(photo =>
        <div className="photo" key={photo.id}>
          <div className="title">{photo.id}. {photo.title}</div>
          <img src={photo.thumbnailUrl} alt="" />
        </div>
        )}
    </div>
  )
}

export default Pagination;