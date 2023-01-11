import React from 'react'
import classnames from 'clsx'

const SOCIAL_LINKS = [
  {
    name: `Facebook`,
    url: `https://facebook.com`,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="50" height="50"
    viewBox="0 0 50 50">`,
  },
  {
    name: `Google`,
    url: `https://google.com`,
    svg: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path
    d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFFFFF" /></svg>`,
  },
]

export function SocialLinks({ className }) {
  return (
    <ul className={classnames('list-reset', className)}>
      {SOCIAL_LINKS.map((link) => (
        <SocialLinkItem key={link.name} link={link} />
      ))}
    </ul>
  )
}

export function SocialLinkItem({ link }) {
  const { name, url, svg } = link

  return (
    <li className="ml-4">
      <a href={url}>
        <span className="sr-only">{name}</span>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </a>
    </li>
  )
}
