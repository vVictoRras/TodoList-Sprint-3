import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = {
    themeMode: 'light' as ThemeMode,
}

export const changeThemeModeAC = createAction<ThemeMode>('theme/switchThemeMode')


export const appReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeThemeModeAC, (state, action) => {
           state.themeMode = action.payload
            // логика мутабельного изменения стейта при изменении темы
        })
})

export type ThemeMode = 'dark' | 'light'