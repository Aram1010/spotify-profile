export const initialState = {
  user: null,
  playlist: [],
  item: null,
  token: null,
  children: [],
  followed: null,
  artist: [],
  tracks: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_CONTENT":
      return {
        ...state,
        children: action.children,
      };
    case "SET_FOLLOWED":
      return {
        ...state,
        followed: action.followed,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_ARTIST":
      return {
        ...state,
        artist: action.artist,
      };
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks,
      };
    default:
      return state;
  }
};
