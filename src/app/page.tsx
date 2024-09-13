import Link from "next/link";

function Page() {
  return (
    <div>
        <h1>Home Page</h1>
         <Link href= "/">Home</Link>
      <br/>
      <Link href="/about">About</Link>
      <br/>
   <Link href="/contact">Contact</Link>
    
     
    </div>
  )
}

export default Page