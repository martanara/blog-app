import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getFilteredPosts } from '../../redux/postsRedux'
import PostCard from '../common/PostCard'

const CategoryView = () => {

  const { categoryName } = useParams();
  
  const posts = useSelector(state => getFilteredPosts(state, categoryName))

  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-2">
      {
        posts.map(post => (
          <Col key={post.id} className="d-flex align-items-stretch">
            <PostCard id={post.id}/>
          </Col>
        ))
      }
    </Row>
  );
}

export default CategoryView;