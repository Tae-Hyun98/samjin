import {configureStore, createSlice} from '@reduxjs/toolkit';

//user_state
const user = createSlice({ //state생성
  name:'user',
  // initialState:'홍길동',
  initialState:{name:'홍길동', memberYear:1},

  reducers:{
    // changeName(){
    //   return '이순신'
    // }
    // changeName(state){
    //   return state + ' : Green'
    // }
    changeName(state){ //객체나 배열은 return으로 돌릴필요없다 단일값은 return으로 돌려줘야함
      state.name=state.name + ' :Green'
    },
    changeYear(state,action){
      state.memberYear += action.payload //값 변경할때 action 인데 payload는 세트
    }
  
  }

})//createSlice

export const {changeName, changeYear} = user.actions; //actions는 변경함수

//cart_state
const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action){
      // state.push(action.payload)
      const index = state.findIndex((findId)=>{return findId.id === action.payload.id});
      if(index > -1){
        state[index].count++
      }else{
        state.push(action.payload)
      }
    },

    deleteItem(state, action){
      const index = state.findIndex((findId)=>{return findId.id === action.payload});
      state.splice(index,1)
    },

    addCount(state, action){
      const index = state.findIndex((findId)=>{return findId.id === action.payload});
      state[index].count++
    },

    subCount(state, action){
      const index = state.findIndex((findId)=>{return findId.id === action.payload});
      if(state[index].count > 1){
      state[index].count--
      }
    }

  }
})

export const {addItem, deleteItem, addCount, subCount}= cart.actions;

export default configureStore({
  reducer:{
    user:user.reducer,
    cart:cart.reducer
  }
})