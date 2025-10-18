import { RootState } from "../store";

export const getAuthLoadingStatus = (state: RootState) => state?.auth?.isLoading;
export const getAuthSuccessCode = (state: RootState) => state?.auth?.successCode;
export const getAuthErrorCode = (state: RootState) => state?.auth?.errorCode;
export const getUserDetailPopupStatus = (state: RootState) => state?.auth?.showUserDetailPopup;