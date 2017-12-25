import React, {Component} from 'react';


export const INC_INDEX =  'INC_INDEX';
export const SET_SECTIONS = 'SET_SECTIONS';
export const SET_URLENTRIES = 'SET_URLENTRIES';
export const RESET_INDEX = 'RESET_INDEX';
export const SET_TEST = 'SET_TEST';
export const SET_ERROR = 'SET_ERROR';

export const incIndex  = () => {
  return { type: INC_INDEX };
}

export const resetIndex = () => {
  return { type: RESET_INDEX };
}

export const setSections = (sections) => {
  return {type: SET_SECTIONS, sections}
}

export const setUrlEntries = (urlentries) => {
  return {type: SET_URLENTRIES, urlentries}
}

export const setTest = (meme) => {
  return {type: SET_TEST, meme}
}

export const setError = (err) => {
  return {type: SET_ERROR, err}
}

export const fetchUrlEntries = (current_section) => {
  return (dispatch) => {
   return fetchUrlsFromFrontend(current_section)
   .then(data => {
     return data.json();
   })
   /*.then(json => {
     return json.map((entry) => {
       return(
         <div className='urlentry'>
           <p className='urltxt'>link txt: {entry[0]}</p>
           <p className='url'>url: {entry[1]}</p>
           <p className='status'>http status: {entry[2]}</p>
           <p> {}
         </div>
       )
     });
   })*/
   .then(
     json => dispatch(setUrlEntries(json)),
     error => dispatch(setError(error))
   );
 };
}


const fetchUrlsFromFrontend = (current_section) => {
  return fetch('/json/klikk_' + current_section + '.json');
}
