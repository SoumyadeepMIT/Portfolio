import Project from '@/components/Project'
import portfolioData from '@/data/portfolio_data.json'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <Project projects={portfolioData.projects} />
    </div>
  )
}

export default page