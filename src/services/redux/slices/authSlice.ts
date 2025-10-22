import { createSlice } from '@reduxjs/toolkit';


interface AuthStateInterface {
    isLoading: boolean;
    successCode: string | null;
    errorCode: string | null;
    showUserDetailPopup: boolean
};

const initialState: AuthStateInterface = {
    isLoading: false,
    successCode: null,
    errorCode: null,
    showUserDetailPopup: false
};

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        clearStatusCode: (state) => {
            state.errorCode = null;
            state.successCode = null;
        },
        submitUserDetailsRequest(state, action) {
            state.isLoading = true;
            state.successCode = null;
            state.errorCode = null;
        },
        submitUserDetailsSuccess(state, action) {
            state.isLoading = false;
            state.successCode = action.payload.status_code;
        },
        submitUserDetailsFailure(state, action) {
            state.isLoading = false;
            state.errorCode = action.payload.status_code;
        },
        setShowUserDetailPopup(state, action) {
            state.showUserDetailPopup = action.payload;
        }
    }
});

export const {
    clearStatusCode,
    submitUserDetailsRequest,
    submitUserDetailsSuccess,
    submitUserDetailsFailure,
    setShowUserDetailPopup
} = authSlice.actions;
export default authSlice.reducer;
