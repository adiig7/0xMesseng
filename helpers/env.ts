export const getEnv = (): 'dev' | 'production' | 'local' => {
  return 'local'
}

export const tagStr = (): string | null => {
  return getEnv() === 'production' ? null : getEnv().toLocaleUpperCase()
}
