// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {title, description, publishedDate} = blogItems

  return (
    <li className="blog-item-container">
      <div className="heading-container">
        <h1 className="title-heading">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="horizontal" />
    </li>
  )
}

export default BlogItem
