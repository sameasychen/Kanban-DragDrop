export enum EnvType {
    dev = "DEV",
    uat = "UAT",
    pro = "PRO"
}

export const AppConfig = {
    envType: EnvType.dev,
    requestTimeout: 15000,
    buildDate: new Date()
}

export const isDebug = (AppConfig.envType !== EnvType.pro)