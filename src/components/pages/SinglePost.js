import { Row, Col, Button, Modal } from 'react-bootstrap'
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getPostId } from '../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { removePost } from '../../redux/postsRedux'
import dateToStr from '../../utils/dateToStr'

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostId(state, id))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removePost(postData.id))
  }

  if (!postData) return <Navigate to="/" />
    return (
      <>
      <article>
        <Row className="d-flex justify-content-between mb-3">
          <Col xs={8} lg={10}>
            <h2>{postData.title}</h2>
          </Col>
          <Col xs={4} lg={2} className="d-flex flex-row-reverse align-items-start">
            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            <Link className="me-3" key={postData.id} to={`/post/edit/${postData.id}`}>
              <Button variant="outline-info">Edit</Button>
            </Link>
          </Col>
        </Row>
        <h3 className="mb-3">{postData.author}</h3>
        <h4 className="mb-4">{dateToStr(postData.publishedDate)}</h4>
        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove the post. Are you sure you want to do that?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={function(e){ handleClose(); remove()}}>Remove</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}

export default SinglePost;