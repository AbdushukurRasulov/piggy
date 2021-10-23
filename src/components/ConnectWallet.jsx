/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Phantom } from "./AssetsComponent";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// classNames(
//   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//   'block px-4 py-2 text-sm'
// )

function ConnectWallet() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="block text-xl leading-5 bg-blue-500 hover:bg-blue-600 font-bold rounded-xl p-6">
          Connect Wallet
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right w-32 absolute right-0 mt-4 focus:outline-none space-y-4">
          <Menu.Item>
            <button type="button"
              className="w-full bg-pink-500 text-white border-2 border-pink-600 rounded-2xl h-12 flex items-center justify-center p-4"
            >
              <img className="w-5 h-5 mr-3" src="icons/phantom.png" alt="" />
              Phantom
            </button>
          </Menu.Item>
          <Menu.Item>
            <button type="button"
              className="w-full bg-pink-500 text-white border-2 border-pink-600 rounded-2xl h-12 flex items-center justify-center p-4"
            >
              <img className="w-5 h-5 mr-3" src="icons/phantom.png" alt="" />
              Sollet
            </button>
          </Menu.Item>
          <Menu.Item>
            <button type="button"
              className="w-full bg-pink-500 text-white border-2 border-pink-600 rounded-2xl h-12 flex items-center justify-center p-4"
            >
              <img className="w-5 h-5 mr-3" src="icons/phantom.png" alt="" />
              Solflare
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ConnectWallet
