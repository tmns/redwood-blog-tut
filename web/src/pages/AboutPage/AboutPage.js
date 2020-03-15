import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <p>
        This site was created while following the official RedwoodJS tutorial.
        It is super fun!
      </p>
      <Link to={routes.home()}>Return home</Link>
    </BlogLayout>
  )
}

export default AboutPage
