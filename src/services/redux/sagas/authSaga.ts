
import { userDetailsAPI } from '@/services/api';
import { submitUserDetailsFailure, submitUserDetailsRequest, submitUserDetailsSuccess } from '../slices/authSlice';
import { put, takeLatest } from 'redux-saga/effects';
import { SUCCESS_KEY } from '@/constants/keys';

function* submitUserDetails(action: any): Generator<any, void, any> {
    try {
        const response = yield userDetailsAPI(action.payload);
        if (response.data.status === SUCCESS_KEY) {
            yield put(submitUserDetailsSuccess(response.data));
        } else {
            yield put(submitUserDetailsFailure(response.data));
        }
    } catch (error: any) {
        yield put(submitUserDetailsFailure(error.response.data));
    }
}


export default function* clientsSaga() {
    yield takeLatest(submitUserDetailsRequest.type, submitUserDetails);
}
