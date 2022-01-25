import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getPostId } from '../../redux/postsRedux'
import { Link } from 'react-router-dom'
import dateToStr from '../../utils/dateToStr'

const PostCard = ({ id }) => {

  const post = useSelector(state => getPostId(state, id))

  return (  
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-3">{post.title}</Card.Title>
        <Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{post.author}</Card.Subtitle>
        <Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{dateToStr(post.publishedDate)}</Card.Subtitle>
        <Card.Subtitle className="mt-2"><span className="fw-bold">Category: </span><Link to={`/categories/${post.category}`}>{post.category}</Link></Card.Subtitle>
        <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
        <Link className="mt-auto" to={`/post/${post.id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default PostCard;