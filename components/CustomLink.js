import Link from 'next/link'

const CustomLink = ({ href, title , ...props }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
 
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{title}</a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...props}>{title}</a>
  }

 // return <a target="_blank" rel="noopener noreferrer" href={href} 
  return <a target="_blank" rel="nofollow" href={href}>{title}</a>
}

export default CustomLink