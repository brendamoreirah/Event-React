import { jwtDecode } from "jwt-decode";

export const userDecodeToken = () => {
    const decodificado = jwtDecode(token);
    return{
        idUsuario: decodificado.jti,
        token: token,
        tipoUsuario: decodificado["Tipo do Usuario"],
        //emailUsuario: decodificado.email
    }
}