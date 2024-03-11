import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    descriptionVisibility: false,
    likes: 0,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleDescription: (state) => {
            state.descriptionVisibility = !state.descriptionVisibility;
        },
        incrementLikesCount: (state) => {
            state.likes += 1;
        },
        decrementLikesCount: (state) => {
            state.likes -= 1;
        },
    },
});

export const { toggleDescription, incrementLikesCount, decrementLikesCount } = appSlice.actions;
export default appSlice.reducer;