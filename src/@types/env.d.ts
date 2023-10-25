export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_TOKEN: string;
      PORT: string;
      JWT_SECRET: string;
    }
  }
}