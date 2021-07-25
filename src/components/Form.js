import React from 'react';

// import Loader from './Loader';

const Form = ({ inputHandler, inputValue, sumbitHandler, isLoading }) => {
  return (

    <div className="mw">
      <form onSubmit={sumbitHandler} className="form">
        <div className="url-shortner ">

          <div className="inner-wrap">
            <input type="text" className="form__input--error"
              onChange={inputHandler}
              value={inputValue}
              placeholder="Shorten a link here" />

            {isLoading ? <input type="submit" value="Loading..." className="input-btn" /> :
              <input type="submit" value="Shorten it!" className="input-btn" />}

          </div>
          <label className='form__label form__label--error'>
            Please add a link
          </label>
        </div>
      </form>
    </div>

    // <form onSubmit={sumbitHandler} classNameName='form'>
    //   <div classNameName='form__container container'>
    //     <input
    //       onChange={inputHandler}
    //       value={inputValue}
    //       type='text'
    //       classNameName='form__input form__input--error'
    //       placeholder='Shorten a link here...'
    //     />
    //     <label classNameName='form__label form__label--error'>
    //       Please add a link
    //     </label>
    //     <input
    //       type='submit'
    //       value='Shorten it!'
    //       classNameName='form__input form__input--btn'
    //     />
    //   </div>
    //   {isLoading ? <Loader /> : null}
    // </form>


  );
};

export default Form;
