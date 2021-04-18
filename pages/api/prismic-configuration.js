import Prismic from "prismic-javascript";

export const apiEndpoint = "https://kkrll.cdn.prismic.io/api/v2";
export const accessToken = "";

export function Client(req) {
  return Prismic.client(apiEndpoint, {
    req: req,
    accessToken,
  });
}
