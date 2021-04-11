import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {

  const location = useLocation()

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      {location.pathname === '/' &&
        <Button 
        color = {showAdd ? 'red' : 'blue'}
        onClick = {onAdd}
        text = {showAdd ? 'HIDE' : 'ADD MORE'}
      />}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
