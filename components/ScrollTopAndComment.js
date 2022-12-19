import { useEffect, useState } from 'react'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false) 
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  // const handleScrollToComment = () => {
  //   document.getElementById('comment').scrollIntoView()
  // }

  const scrollClass = "scrollup" + (show ? ' show-scrollup' : '')

  return (
    <a onClick={handleScrollTop} href="#" className={scrollClass} id="scrollup">
      <i className="bx bx-up-arrow-alt" />
    </a>
  )
}

export default ScrollTopAndComment