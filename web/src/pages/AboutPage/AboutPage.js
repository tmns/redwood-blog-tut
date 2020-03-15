import { Link, routes} from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>RedwoodJS Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created while following the official RedwoodJS tutorial.
          It is super fun!
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>
    </>
  )
}

export default AboutPage
