import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Yasith Eranda",
          "a Web Designer",
          "a Graphic Designer",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
