//signin reducer
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST' as const;
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS' as const;
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE' as const;

export interface SignInData {
  userId: string;
  password: string;
}

export interface SignInRequest {
  type: typeof SIGNIN_REQUEST;
  data: SignInData;
}

//signin request
export const signInRequest = (data: SignInData) => ({
  type: SIGNIN_REQUEST,
  data,
});

//success, failure도 정의.

export type SignIn = SignInRequest;
