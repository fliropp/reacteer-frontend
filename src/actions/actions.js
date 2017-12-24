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

export const setUrlEntries = (urls) => {
  return {type: SET_URLENTRIES, urls}
}

export const setTest = (meme) => {
  return {type: SET_TEST, meme}
}

export const errorTest = (meme) => {
  return {type: SET_ERROR, meme}
}

export const fetchUrlEntries = (url) => {
  return (dispatch) => {
   return fetchUrlsFromFrontend(url)
   .then(data => {
     return data.json();
   })
   .then(
     meme => dispatch(setTest(meme)),
     error => dispatch(errorTest(error))
   );
 };
}


const fetchUrlsFromFrontend = (path) => {
  return fetch('/json/test' + path + '.json')
}
