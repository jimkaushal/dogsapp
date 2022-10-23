const Dog = ({message, breed}) => {
  return (
    <div className="dog">
      <img src={message} />
      <span>{breed}</span>
    </div>
  );
}

export default Dog;
