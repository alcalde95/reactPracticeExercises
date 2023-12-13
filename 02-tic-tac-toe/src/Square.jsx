
const Square = ({ children, handleSquareClick, index, isSelected }) => {

  const className = `square ${isSelected ? 'is-selected' : ' '} `;
  const handleClick = () => {
    handleSquareClick(index);
  }
  
  return (
    <div className={className} onClick={handleClick}>{children}</div>
  )
}
export default Square;
