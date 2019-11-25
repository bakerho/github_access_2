import React from 'react';
const Form = (props) => {
  return (<form onSubmit ={(event) => props.handleUserFormSubmit(event)}>
    <label>
      
      <input class="form-control mr-sm-2" name="username" type="search" aria-label="Search" placeholder="Enter GitHub username..."
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
        />
    </label>
    <div>
      <input
        class="btn btn-outline-secondary my-2 my-sm-0"
        type ="submit"
        value ="Enter"
      />
    </div>
  </form>
)
};
export default Form;
