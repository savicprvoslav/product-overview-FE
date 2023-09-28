import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {EllipsisVerticalIcon} from '@heroicons/react/20/solid'
import {Product} from "@/pages/website/components/Model";
import Link from "next/link";

const statuses = {
  Complete: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ProductMenu({product}: { product: Product }) {
  return (
    <Menu as="div" className="relative flex-none">
      <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
        <span className="sr-only">Open options</span>
        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true"/>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          <Menu.Item>
            {({active}) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-50' : '',
                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                )}
              >
                Edit<span className="sr-only">, {product.name}</span>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({active}) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-50' : '',
                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                )}
              >
                Delete<span className="sr-only">, {product.name}</span>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function ProductContent(props: { product: Product }) {
  return <div className="min-w-0">
    <div className="flex items-start gap-x-3">
      <p className="text-sm font-semibold leading-6 text-gray-900"><Link
        href={`/app/products/${props.product.id}`}> {props.product.name}</Link></p>
    </div>
  </div>;
}

function ProductActions(props: { product: Product }) {
  return <div className="flex flex-none items-center gap-x-4">
    <ProductMenu product={props.product}/>
  </div>;
}

function ProductItem(props: { product: Product }) {
  return <li className="flex items-center justify-between gap-x-6 py-5">
    <ProductContent product={props.product}/>
    <ProductActions product={props.product}/>
  </li>;
}

export default function ProductList({query, products}: { query: string, products: Product[] }) {

  let productItems = <>{products
    .filter((product: Product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .map((product: Product) => (
      <ProductItem key={product.id} product={product}/>
    ))}</>;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {productItems}
    </ul>
  )
}




