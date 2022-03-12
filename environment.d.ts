declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT?: string
      API_URL: string
      ACCESS_TOKEN: string
    }
  }
}
