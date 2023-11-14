// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <div className="blog-list-container">
      {blogList.map(eachBlogList => (
        <BlogItem blogItems={eachBlogList} key={eachBlogList.id} />
      ))}
    </div>
  )
}

export default BlogList
