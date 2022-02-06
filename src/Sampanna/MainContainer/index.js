const MainContainer = (props) => {
  return (
    <div className="parallax-3">
      {props.left_content}
      {props.right_content}
    </div>
  );
};

export default MainContainer;
