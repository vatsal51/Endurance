import React, { useState, useEffect } from 'react';

import Form from './Form';
import Results from './Results';

const baseURL = 'https://api.shrtco.de/v2/';

const PanelWrapper = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultsList, setResultsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isCopied, setIsCopied] = useState(false);

  const handleInputOnChange = (e) => {
    const value = e.target.value;
    document.querySelector('.form').classList.remove('error');
    // document.querySelectorAll('.result__btn').forEach((btn) => {
    //   btn.textContent = 'Copy';
    //   btn.classList.remove('result__btn--active');
    // });

    setInputValue(value);
    // setIsCopied(false);
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();

    const link = inputValue;

    if (!validation(link)) {
      document.querySelector('.form').classList.add('error');
      return;
    }

    getData(link);
    setInputValue('');
  };

  // const handleOnCopy = () => {
  //   // setIsCopied(true);
  // };

  const validation = (link) => {
    const regex =
      // eslint-disable-next-line
      /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    return regex.test(link);
  };

  const getData = (link) => {
    // showLoading();
setIsLoading(true)
    fetch(`${baseURL}shorten?url=${link}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Status ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          throw Error(`This is not a valid URL`);
        } else {
          const { result } = data;

          const resultsListCopy = resultsList;

          const newItem = {
            linkFrom: link,
            linkTo: result.short_link,
          };

          resultsListCopy.unshift(newItem);

          setResultsList(resultsListCopy);

          // hideLoading();
          setIsLoading(false)
        }
      })
      .catch((err) => console.error(err));
  };

  // const showLoading = () => {
  //   document.querySelector('.input-btn').value = "Loading..."
  //   setIsLoading(true);
  // };

  // const hideLoading = () => {
  //   document.querySelector('.input-btn').value = "Shorten it!"
  //   setIsLoading(false);
  // };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('resultsList'));

    if (data) {
      setResultsList(data);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('resultsList', JSON.stringify(resultsList));
  });

  return (
    <>
      <Form
        inputHandler={handleInputOnChange}
        inputValue={inputValue}
        sumbitHandler={handleFormOnSubmit}
        isLoading={isLoading}
      />
      <Results
        shortLinksList={resultsList}
        // copyHandler={handleOnCopy}
        // copyInfo={isCopied}
      />
    </>
  );
};

export default PanelWrapper;
