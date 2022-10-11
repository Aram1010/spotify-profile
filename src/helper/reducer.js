export const initialState = {
  user: null,
  playlist: [],
  item: null,
  token: null,
  //"BQAseZ635-RvNP0cXLx5hfIwH4UBNyMEpeiGtjLiuC5t4kVPEhHJbIR4cw4EQ2z9FSiFsT1jRwJ90Auj-AtQHbXOsfc73QQjTyFY1u_0tUQwMFffgvre5DUuR_crtQtXNxV5SYzS0R8Qd8MHxagiF4_LjlFa2C5RxLsObooMGeKaaXVHqL7oE1XqYZ0YbNgTAYFDaNplBWq3Vsvkg7teTF_mJMsy",
  children: [],
  followed: null,
  artist: [],
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
    default:
      return state;
  }
};
