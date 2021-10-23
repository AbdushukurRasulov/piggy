import React from 'react'

const teams = [
  {
    image: 'team-pb',
    name: 'Piggy Bank',
    position: 'developer'
  },
  {
    image: 'team-pc',
    name: 'Piggy Capone',
    position: 'product'
  },
  {
    image: 'team-p',
    name: 'Pigasso',
    position: 'artist'
  }
]

const Team = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 my-24">
      <h1 className="text-5xl text-center leading-normal ">
        The Team
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-16 mt-4 mb-8 px-8">
        {
          teams.map(item => (
            <TeamMember key={item.name} {...item} />
          ))
        }
      </div>
    </div>
  )
}

const TeamMember = ({ name, position, image }) => (
  <div className="text-center">
    <img className="w-48 h-48 mx-auto flex-shrink-0 border-12 border-white rounded-2xl overflow-hidden mb-4" src={`assets/${image}.png`} alt="" />
    <h1 className="text-4xl leading-normal font-bold ">
      {name}
    </h1>
    <p className="text-xl leading-6 uppercase">
      {position}
    </p>
  </div>
)

export default Team
