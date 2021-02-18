const initialState = {
    clips: [], // 初期値として空の配列を用意
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIP':
            return {
                ...state, // ...は配列の[]括弧を除去するやつ
                clips: [...state.clips, action.clip],
            };
        case 'DELETE_CLIP':
            return {
                ...state,
                clips: state.clips.filter(clip => clip.url !== action.clip.url),
            }; // 前回のstateのclipsからfilterで条件に該当する要素を除いた配列を返す
        default:
            return state;
    }
};

export default reducer;
