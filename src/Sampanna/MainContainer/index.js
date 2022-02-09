const MainContainer = (props) => {
  return (
    <div className="Main-Container">
      {props.left_content}
      {props.right_content}
    </div>
  );
};

export default MainContainer;
