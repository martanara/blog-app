import styles from './PostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import clsx from 'clsx';


const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  }

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Group className={clsx("mb-3")} controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Enter title" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
      </Form.Group>
      <Form.Group className={clsx("mb-3", styles.smallInput)} controlId="formAuthor">
       <Form.Label>Author</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter author" 
          value={author} 
          onChange={e => setAuthor(e.target.value)} 
          required
        />
      </Form.Group>
      <Form.Group className={clsx("mb-3", styles.smallInput)} controlId="formDate">
        <Form.Label>Published</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter date" 
          value={publishedDate} 
          onChange={e => setPublishedDate(e.target.value)} 
          required
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          as="textarea" rows={3} 
          placeholder="Enter descrption" 
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)}
          required
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main Content</Form.Label>
        <Form.Control 
          as="textarea" rows={10} 
          placeholder="Enter content" 
          value={content} onChange={e => 
          setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  )
}

export default PostForm;