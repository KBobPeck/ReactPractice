import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button 
        color = {showAdd ? 'red' : 'blue'}
        onClick = {onAdd}
        text = {showAdd ? 'HIDE' : 'ADD MORE'}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
