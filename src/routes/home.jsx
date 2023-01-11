import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Coming soon..."
        content="In the meantime, Sign up for our monthly newsletter to stay up to date.        "
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
