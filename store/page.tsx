import { atom, selector } from 'recoil'

export const accessTokenState = atom({
    key: 'accessTokenState',
    default: '',
})

// export const charCountState = selector({
//     key: 'charCountState',
//     get: ({ get }) => {
//         const text = get(textState)

//         return text.length
//     },
// })
