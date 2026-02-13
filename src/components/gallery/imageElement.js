
function Image({ element, onClick }) {
  return (
    <img
      src={element.image}
      className="img-thumbnail"
      alt={element.image}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
}
export default Image;