import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h2>{post.title}</h2>
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
    </article>
  ))
}
