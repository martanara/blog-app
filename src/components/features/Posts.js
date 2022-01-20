import { Card, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/postsRedux'

const Posts = () => {

  const posts = useSelector(state => getAllPosts(state))

  return (
    <section>
      <div className="d-flex justify-content-between">
        <h2>All posts</h2>
        <Button variant="outline-info" className="mt-2">Add Post</Button>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        {
          posts.map(post => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="mb-3">{post.title}</Card.Title>
                  <Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{post.author}</Card.Subtitle>
                  <Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{post.publishedDate}</Card.Subtitle>
                  <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
                  <Button variant="primary" className="mt-2">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </section>
  );
}

export default Posts;