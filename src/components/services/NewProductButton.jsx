import { Button, Row } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';

function NewProductButton({ textButton, linkTo, loading }) {
  const navegate = useNavigate();

  return (
    <Row justify="flex-end">
      { loading ? <LoadingSpinner/> : <Button type='submit' shadow color="gradient" onClick={() => navegate(linkTo)}>{textButton}</Button> }
    </Row>
  )
}

export { NewProductButton }
