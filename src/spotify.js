export const authEndpoint =  "https://accounts.spotify.com/authorize";
const redirectUrl = "https://localhost:3000/";
const clientId = "597a43f8af7b4555a2a78488023aa5d1"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_url={redireUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
