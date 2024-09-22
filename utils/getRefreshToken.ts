import { REFRESH_TOKEN_MUTATION } from "@/services/User/refreshToken";
import { useAuthStore } from "@/store/auth";
import { useMutation } from "@apollo/client";

export async function getRefreshToken(): Promise<string[]> {
  const refreshTokenStored = useAuthStore.getState().refreshToken;
  const [refreshToken, { error }] = useMutation(REFRESH_TOKEN_MUTATION);


  const { data } = await refreshToken({ variables: { refreshToken: refreshTokenStored } });
  const { access_token, refresh_token } = data.refreshToken;
  
  useAuthStore.getState().setTokens(access_token, refresh_token);
  return [access_token];
}