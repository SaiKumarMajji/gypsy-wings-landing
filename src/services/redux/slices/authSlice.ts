import { createSlice } from '@reduxjs/toolkit';


interface AuthStateInterface {
    isLoading: boolean;
    successCode: string | null;
    errorCode: string | null;
    data: any
};

const initialState: AuthStateInterface = {
    isLoading: false,
    successCode: null,
    errorCode: null,
    data: null
};

const authSlice: any = createSlice({
    initialState,
    name: 'auth',
    reducers: {
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
        }
    }
});

export const {
    submitUserDetailsRequest,
    submitUserDetailsSuccess,
    submitUserDetailsFailure
} = authSlice.actions;
export default authSlice.reducer;
