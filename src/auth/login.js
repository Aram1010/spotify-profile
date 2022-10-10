const endPoint = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3000/";
const sp_id = "43b86ed4bf52464eb5500532314ac541";

const scopes = [
  "user-top-read",
  "user-read-recently-played",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-follow-read",
];

export const login_url = `${endPoint}?client_id=${sp_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const tokenRes = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let part = item.split("=");
      initial[part[0]] = decodeURIComponent(part[1]);

      return initial;
    }, {});
};
