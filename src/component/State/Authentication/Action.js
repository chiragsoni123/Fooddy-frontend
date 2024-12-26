import axios from "axios"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, 
         GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, 
         LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
         REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { api, API_URL } from "../../config/api"

// CHANGE 1: Add token validation helper
const isValidToken = (token) => {
    if (!token) return false;
    try {
        // Basic structure check
        const parts = token.split('.');
        return parts.length === 3;
    } catch (error) {
        console.error('Token validation error:', error);
        return false;
    }
}

// CHANGE 2: Improved token storage
const storeToken = (token) => {
    if (isValidToken(token)) {
        localStorage.setItem("jwt", token);
        return true;
    }
    console.error('Invalid token format');
    return false;
}

export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type: REGISTER_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
        // CHANGE 3: Added token validation before storing
        if(data.jwt && storeToken(data.jwt)) {
            dispatch({type: REGISTER_SUCCESS, payload: data.jwt})
            // CHANGE 4: Moved navigation after dispatch
            if(data.role === "ROLE_RESTAURANT_OWNER") {
                reqData.navigate("/admin/restaurant")
            } else {
                reqData.navigate("/")
            }
            console.log("register success", data)
        } else {
            throw new Error("Invalid token received");
        }
    } catch (error) {
        dispatch({type: REGISTER_FAILURE, payload: error})
        console.error("Registration error:", error)
    }
}

export const loginUser = (reqData) => async(dispatch) => {
    dispatch({type: LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
        // CHANGE 5: Added token validation before storing
        if(data.jwt && storeToken(data.jwt)) {
            dispatch({type: LOGIN_SUCCESS, payload: data.jwt})
            // CHANGE 6: Moved navigation after dispatch
            if(data.role === "ROLE_RESTAURANT_OWNER") {
                reqData.navigate("/admin/restaurant")
            } else {
                reqData.navigate("/")
            }
            console.log("login success", data)
        } else {
            throw new Error("Invalid token received");
        }
    } catch (error) {
        dispatch({type: LOGIN_FAILURE, payload: error})
        console.error("Login error:", error)
    }
}

// CHANGE 7: Improved API call configuration
export const getUser = (jwt) => async(dispatch) => {
    dispatch({type: GET_USER_REQUEST})
    try {
        if (!isValidToken(jwt)) {
            throw new Error("Invalid token format");
        }
        const {data} = await api.get(`/api/user/profile`, {
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            }
        })
        dispatch({type: GET_USER_SUCCESS, payload: data})
        console.log("user profile", data)
    } catch (error) {
        console.error("User profile error:", {
            message: error.message,
            response: error.response,
            request: error.request
        });
        dispatch({type: GET_USER_FAILURE, payload: error})
    }
}

// CHANGE 8: Improved favorite addition handling
export const addToFavorite = (jwt, restaurantId) => async(dispatch) => {
    dispatch({type: ADD_TO_FAVORITE_REQUEST})
    try {
        if (!isValidToken(jwt)) {
            throw new Error("Invalid token format");
        }
        const {data} = await api.put(
            `/api/restaurant/${restaurantId}/add-favorite`,
            {},
            {
                headers: {
                    'Authorization': `Bearer ${jwt}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        dispatch({type: ADD_TO_FAVORITE_SUCCESS, payload: data})
        console.log("added to favorite", data)
    } catch (error) {
        dispatch({type: ADD_TO_FAVORITE_FAILURE, payload: error})
        console.error("Add to favorite error:", error)
    }
}

// CHANGE 9: Improved logout handling
export const logout = () => async(dispatch) => {
    try {
        localStorage.removeItem("jwt");  // More specific than clear()
        dispatch({type: LOGIN_SUCCESS, payload: null})  // Added payload
        console.log("logout success")
    } catch (error) {
        console.error("Logout error:", error)
    }
}