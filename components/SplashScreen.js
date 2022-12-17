import { useEffect, useState } from "react";
import Loader from "./Loader"


const SplashScreen = () => {

  
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
}, []);



  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <></>
      )}
    </>
  )
}

export default SplashScreen