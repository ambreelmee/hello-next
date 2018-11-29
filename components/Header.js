import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const baseUrl = process.env.NODE_ENV === 'development' ? '' : "/hello-next";

const Header = () => (
    <div>
        <Link href="/" as={`${baseUrl}/`} >
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/pie" as={`${baseUrl}/pie`} >
          <a style={linkStyle}>Pie</a>
        </Link>
        <Link href="/bar" as={`${baseUrl}/bar`} >
          <a style={linkStyle}>Bar</a>
        </Link>
        <Link href="/bubbles" as={`${baseUrl}/bubbles`} >
          <a style={linkStyle}>Bubbles</a>
        </Link>
        <Link href="/sankey" as={`${baseUrl}/sankey`} >
          <a style={linkStyle}>Sankey</a>
        </Link>
        <Link href="/treemap" as={`${baseUrl}/treemap`} >
          <a style={linkStyle}>TreeMap</a>
        </Link>
    </div>
)

export default Header
