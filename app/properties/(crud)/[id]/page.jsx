"use client"

import { useParams,usePathname,useSearchParams } from "next/navigation"

const DynamicProp = () => {
  const params=useParams();
  const searchParams=useSearchParams();
  const pathname=usePathname(); 
  const name=searchParams.get("name")

  
  return (
    // http://localhost:3000/properties/99?name=Ivan
    <div>DynamicProp, {params.id}---{name},{pathname}</div>
  )
}

export default DynamicProp