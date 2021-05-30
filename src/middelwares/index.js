import * as authJwt from "./auth.jwt";
const hasAccessAndAdmin = [authJwt.verifyToken, authJwt.isAdmin ];
const hasAccessAndUser  = [authJwt.verifyToken, authJwt.isUser ];

export { 
    authJwt, 
    hasAccessAndAdmin,
    hasAccessAndUser 
};