import { useParams } from 'react-router-dom';

const CategoryView = () => {
  const { categoryId } = useParams();
  return (
    <>
      <h2>Category id: {categoryId}</h2>
    </>
  );
};

export default CategoryView;
