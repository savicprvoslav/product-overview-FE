'use client'

import {useState} from 'react'
import './globals.css'
import MainSection from "@/pages/app/Components/MainSection";
import {Product} from "@/pages/website/components/Model";
import ProductList from "@/pages/app/Components/ProductList";
import AppLayout from "@/pages/app/layout";
import NoItemsAdd from "@/pages/app/Components/NoItemsAdd";
import AddItemButton from "@/pages/app/Components/AddItemButton";
import ListError from "@/pages/app/Components/ListError";

const userNavigation = [
  {name: 'Your profile', href: '#'},
  {name: 'Sign out', href: '#'},
]

export default function App({productsLoaded, hasError}: { productsLoaded: Product[], hasError: boolean }) {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<Product[]>(productsLoaded);

  const onClick = () => {
    alert("Add project");
  }


  let productsComponent

  if (hasError)
    productsComponent = <ListError message={"Ups could not load products..."}/>
  else if (!products || products.length == 0)
    productsComponent = <NoItemsAdd
      actionName="Add Project"
      noProjectsMessage={{title: "No Products yet", description: "Use the action button to create product."}}
      onClick={onClick}/>
  else
    productsComponent = <><ProductList query={query} products={products}/> <AddItemButton onClick={onClick}
                                                                                          actionName="Add Project"/></>

  return (
    <AppLayout>
      <MainSection
        userNavigation={userNavigation}
        query={query}
        setQuery={setQuery}
      >
        {productsComponent}

      </MainSection>
    </AppLayout>
  )
}

export async function getServerSideProps() {
  console.log(`${process.env.API}/products`)
  const result = await fetch(`${process.env.API}/products`);

  const hasError = !result.ok
  const data = await result.json()

  return {
    props: {
      productsLoaded: data,
      hasError: hasError
    }
  }
}
