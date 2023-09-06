
import React,{useState} from 'react';


export const Form =  (props) => {
    const [name,setName] = useState("");
    function handlechange(e){
        setName(e.target.value);
    }
    function handlesubmit(e){;
    e.preventdefault();
    props.addtask(name);
    setName("");
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value = {name}
          onChange={handlechange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    </div>
  )
};
export default Form;
