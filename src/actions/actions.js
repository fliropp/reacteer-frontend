export const INC_INDEX =  'INC_INDEX';
export const SET_SECTIONS = 'SET_SECTIONS';
export const SET_URLENTRIES = 'SET_URLENTRIES';
export const RESET_INDEX = 'RESET_INDEX';
export const SET_TEST = 'SET_TEST';
export const SET_ERROR = 'SET_ERROR';
export const SET_LIGHTHOUSE_DATA = 'SET_LIGHTHOUSE_DATA';
export const SET_HELP_TXT = 'SET_HELP_TXT';

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

export const setLightHouseData = (lhd) => {
  return {type: SET_LIGHTHOUSE_DATA, lhd}
}

export const setError = (err) => {
  return {type: SET_ERROR, err}
}

export const setHelpTxt = (htxt, metric) => {
  return {type: SET_HELP_TXT, htxt, metric}
}

export const fetchUrlEntries = (current_section) => {
  return (dispatch) => {
   return fetchUrlsFromBackend(current_section)
   .then(data => {
     return data.json();
   })
   .then(
     json => dispatch(setUrlEntries(json)),
     error => dispatch(setError(error))
   );
 };
}

export const fetchLightHouseData = (current_section) => {
  return (dispatch) => {
    return fetchLighouseDataFromBackend(current_section)
    .then(data => {
      return data.json();
    })
    .then(
      json => dispatch(setLightHouseData(json)),
      error => dispatch(setError(error))
    );
  };
}

const fetchLighouseDataFromBackend = (current_section) => {
  return fetch('/lighthouse/klikk_' + current_section + '.json');
}

const fetchUrlsFromBackend = (current_section) => {
  return fetch('/json/klikk_' + current_section + '.json');
}
