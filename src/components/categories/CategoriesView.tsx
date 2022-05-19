type Props = {
  categoryId: number;
};

export const CategoryView = ({ categoryId }: Props) => {
  return (
    <>
      <h2>Category id: {categoryId}</h2>
    </>
  );
};
