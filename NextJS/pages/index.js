import Link from "next/link"
import {useRouter} from 'next/router'

function Home(){
  const router = useRouter()
  const handleClick  = ()=>{
    console.log('Placing order')
    router.replace('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'><a>Blog</a></Link>
      <Link href='/product'><a>Products</a></Link>
      <Link href='/posts'><a>Posts</a></Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home