import React from 'react';


const Form = ({ inputHandler, inputValue, sumbitHandler, isLoading }) => {
  return (

    <div className="mw">
      <form onSubmit={sumbitHandler} className="form">
        <div className="url-shortner ">

          <div className="inner-wrap">
            <input type="text" className="form-input--error"
              onChange={inputHandler}
              value={inputValue}
              placeholder="Shorten a link here" />

            {isLoading ? <input type="submit" value="Loading..." className="input-btn" /> :
              <input type="submit" value="Shorten it!" className="input-btn" />}

          </div>
          <label className='form-label form-label--error'>
            Please add a link
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
