import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8180/auth/",
 realm: "secured-app",
 clientId: "webapp",
});

export default keycloak;