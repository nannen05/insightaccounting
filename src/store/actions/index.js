import { DATAREFTEAM, DATAREFNAV, DATAREFSERVICES, DATAREFHERO, DATAREFABOUT } from '../../firebase'
import { FETCH_DATATEAM, FETCH_DATANAV, FETCH_DATASERVICES, FETCH_DATAHERO, FETCH_DATAABOUT } from "./types";

export const fetchNav = () => async dispatch => {
  DATAREFNAV.on("value", snapshot => {
    dispatch({
      type: FETCH_DATANAV,
      payload: snapshot.val()
    });
  });
};

export const fetchHero = () => async dispatch => {
  DATAREFHERO.on("value", snapshot => {
    dispatch({
      type: FETCH_DATAHERO,
      payload: snapshot.val()
    });
  });
};

export const fetchServices = () => async dispatch => {
  DATAREFSERVICES.on("value", snapshot => {
    dispatch({
      type: FETCH_DATASERVICES,
      payload: snapshot.val()
    });
  });
};

export const fetchTeam = () => async dispatch => {
  DATAREFTEAM.on("value", snapshot => {
    dispatch({
      type: FETCH_DATATEAM,
      payload: snapshot.val()
    });
  });
};

export const fetchAbout = () => async dispatch => {
  DATAREFABOUT.on("value", snapshot => {
    dispatch({
      type: FETCH_DATAABOUT,
      payload: snapshot.val()
    });
  });
};