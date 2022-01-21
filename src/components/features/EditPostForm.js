import PostForm from './PostForm';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { useParams } from 'react-router';
import { getPostId } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostId(state, id))

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }))
    navigate("/")
  }

  if (!postData) return <Navigate to="/" />
    return (
      < PostForm action={handleSubmit} actionText={'Edit post'} 
        title={postData.title} author={postData.author} publishedDate={postData.publishedDate}
        shortDescription={postData.shortDescription} content={postData.content}
      />
    )
}

export default EditPostForm;