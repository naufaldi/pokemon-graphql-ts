import LoadingAnimation from 'lottie/loading.json'
import Lottie from 'lottie-react'
import React from 'react'

const Loading = () => {
  return (
    <>
      <Lottie animationData={LoadingAnimation} loop={true} height={500} width={500} />
    </>
  )
}

export default Loading
