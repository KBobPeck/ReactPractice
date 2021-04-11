import Button from './Button'

const Header = ({title}) => {

  const onClick = () => {
    console.log('click')
  }

  return (
    <header>
      <h1>Task Tracker</h1>
      <Button 
        color = 'red'
        onClick = {onClick}
        text = "Add"
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
