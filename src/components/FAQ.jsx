import { ChevronDownIcon, MinusIcon } from "@heroicons/react/outline"
import React, { useRef, useState } from 'react'


const faqs = [
  {
    question: 'What is Piggy Sol Gang?',
    answer: 'They are algorithmically generated 10,000 cute & cruel piggies who are living on the #Solana blockchain.'
  },
  {
    question: 'When I will get my Piggy after the mint?',
    answer: 'Your Piggy will be sent to your wallet right after the minting which might take few minutes.'
  },
  {
    question: 'Which Solana wallets can I use?',
    answer: 'We will be using Sollet and Phantom wallet for the website connection.'
  },
  {
    question: 'When is the launch?',
    answer: 'We are launching on Sunday, 5th September at 12 AM GMT+5. You can get the latest updates from our Twitter & Discord.'
  },
  {
    question: 'Who are you?',
    answer: 'We are a team of three friends/ex-colleagues from different parts of the world, who left their corporate lives behind and fully committed to make Piggy Sol Gang a reality!'
  }
]

export const FAQ = () => {
  return (
    <div className="px-6 lg:px-12">
      <h1 className="text-4xl lg:text-5xl text-center leading-normal mb-12 lg:mb-20">
        Frequently Asked Questions
      </h1>

      <ul className="space-y-4 lg:space-y-8">
        {
          faqs.map((item, index) => (
            <FaqItem key={index} {...item} id={index + 1} />
          ))
        }
      </ul>
    </div>
  )
}

const FaqItem = ({ question, answer, id }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  const toggleFaq = (id) => {
    if (id !== active) {
      setActive(id);
      setOpen(true);
      setHeight(ref.current.clientHeight)
    } else {
      setActive(0);
      setOpen(false);
      setHeight(0)
    }
  };

  return (
    <li>
      <button
        type="button"
        onClick={() => toggleFaq(id)}
        className="w-full bg-white text-black flex items-center justify-between text-lg lg:text-3xl font-bold text-left rounded-md shadow-faq-button px-3 py-4 lg:p-6 group">
        {question}

        <span className="w-5 h-5 lg:w-12 lg:h-12 bg-black text-white flex-shrink-0 border-2 grid place-content-center rounded-full shadow-circle  group-hover:border-brand-primary group-hover:text-brand-primary transition duration-200 ease-in-out">
          {
            open ? <MinusIcon className="w-3 lg:w-5" /> : <ChevronDownIcon className="w-3 lg:w-5" />
          }
        </span>
      </button>

      <div className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ height: `${active === id ? `${height}px` : 0}` }}
      >
        <div ref={ref} className="text-sm lg:text-2xl font-light lg:leading-loose p-6">
          <p>
            {answer}
          </p>
        </div>
      </div>
    </li>
  )
}

export default FAQ
