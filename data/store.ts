export const storeConfig = {
  name: "IphoneStore",
  whatsapp: "SEU_NUMERO_AQUI",
  instagram: "INSTAGRAM_URL",
  location: "Sua localização",
} as const;

export type StoreConfig = typeof storeConfig;
