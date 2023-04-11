import LoadingAnimation from 'lottie/loading.json'
import Lottie from 'lottie-react'
import React from 'react'

const Loading = () => {
  return (
    <>
      <Lottie animationData={LoadingAnimation} loop={true} />
    </>
  )
}

export default Loading
