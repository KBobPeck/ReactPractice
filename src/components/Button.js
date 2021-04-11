import PropTypes from "prop-types"

const Button = ({color, onClick, text}) => {
  return (
    <button
      className = 'btn'
      onClick = {onClick}
      style = {{backgroundColor: color}}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: "add",
  color: "black",
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
