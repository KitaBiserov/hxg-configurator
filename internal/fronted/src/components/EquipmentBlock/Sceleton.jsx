import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={250}
    height={450}
    viewBox="0 0 250 450"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="50" y="50" rx="0" ry="0" width="200" height="450" />
  </ContentLoader>
)

export default MyLoader

