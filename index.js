const Box = (props) => {
  //  Write your code here.
  const { imgTxt, className } = props;
  return (
    <div className={className}>
      <p className="image-text">{imgTxt}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="img-body">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box imgTxt="Small" className="image-small" />
      <Box imgTxt="Medium" className="image-medium" />
      <Box imgTxt="Large" className="image-large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
