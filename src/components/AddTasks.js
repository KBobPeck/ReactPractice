
import { useState } from 'react'

const AddTasks = () => {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className='add-form'>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder='Add Task'
          value = {text}
          onChange = {(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day and time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder='Add Day and Time'
          value = {day}
          onChange = {(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          name=""
          id=""
          value = {reminder}
          onChange = {(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        name=""
        id=""
        value='Save Task'
        className='btn btn-block'
      />
    </form>
  )
}

export default AddTasks
