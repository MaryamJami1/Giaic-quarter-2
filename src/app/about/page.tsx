import Link from "next/link"

function About(){
return(
    <>
        <h1>About</h1>
   <Link href= "/">Home</Link>
   <br/>
   <Link href="/about">About</Link>
   <br/>
   <Link href="/contact">Contact</Link>

    </>
)
}
export default About