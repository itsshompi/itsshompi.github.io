function Video({ element, onClick }) {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={element.image} className="img-thumbnail" alt="Video thumbnail" />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
        <i className="fa fa-play-circle fa-3x"></i>
      </div>
    </div>
  );
}
export default Video;