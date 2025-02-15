import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to My Home Page</p>
      <div>
        <Link href="/admin">Admin Page</Link>
        <b />
        <Link href="/about">About Page</Link>
        <b />
        <Link href="/articles/search">Articles Page</Link><b />
        <Link href="/login">Login Page</Link><b />
        <Link href="/register">Register Page</Link><b />
      </div>
    </div>
  )
}

export default HomePage
