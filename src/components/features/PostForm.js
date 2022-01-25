import styles from './PostForm.module.scss';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import clsx from 'clsx';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";


const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)} className={styles.form}>
      <Form.Group className={clsx("mb-3")} controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          type="text" 
          placeholder="Enter title" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required (min length is 3)</small>}
      </Form.Group>
      <Form.Group className={clsx("mb-3", styles.smallInput)} controlId="formAuthor">
       <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register("author", { required: true, minLength: 3 })}
          type="text" 
          placeholder="Enter author" 
          value={author} 
          onChange={e => setAuthor(e.target.value)} 
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required (min length is 3)</small>}
      </Form.Group>
      <Form.Group className={clsx("mb-3", styles.smallInput)} controlId="formDate">
        <Form.Label>Published</Form.Label>
        <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
        {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea" rows={3} 
          placeholder="Enter descrption" 
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)}
          />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (min length is 20)</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main Content</Form.Label>
        <ReactQuill theme="snow" placeholder="Enter content" value={content} onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>
      <Button variant="primary" type="submit">{actionText}</Button>
    </Form>
  )
}

export default PostForm;