import { defineStore } from 'pinia'
import { LocaleEnum, NAMESPACE } from './types'


export const useUserMsg = defineStore(NAMESPACE.USER_OPERATE, {
    state: () => {
        return {

        }
    },
    getters: {

    },
    actions: {
        loginOut() {

        }
    }

});


export const useLocale = defineStore(NAMESPACE.LOCALE_CONFIG, {
    state: () => {
        return {
            locale: 'zh',
            language: '中文'
        }
    },
    actions: {
        changeLocale(language: LocaleEnum) {
            this.locale = language;
            if (language === 'zh') {
                this.language = '中文'
            } else {
                this.language = 'ENG'
            }
        }
    }
})