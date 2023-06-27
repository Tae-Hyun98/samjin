import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeYear, deleteItem, addCount, subCount} from './store';

export default function Cart() {

  // const state = useSelector((state)=>{return state})
  const state = useSelector((state)=>state) //useSelector는 store에 있는 state를 가져오는 Hooks
  const dispatch = useDispatch()

    let count1=document.querySelector('.count')
    let price1=document.querySelector('.price')

    let add1=count1*price1

  return (
    <div style={{textAlign:'center'}}>
      <h2><span style={{color:'blue', fontWeight:'bold'}}>{state.user.name}</span>님의 장바구니</h2>
      <button onClick={()=>dispatch(changeName())}>닉네임보이기</button>
      <h3>회원가입기간 : {state.user.memberYear}년</h3>
      <button style={{width:50}} onClick={()=>dispatch(changeYear(1))}>+</button>
      <button style={{width:50}} onClick={()=>dispatch(changeYear(-1))}>-</button>
      
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>개수</th>
          <th>가격(개당)</th>
          <th>추가</th>
        </tr>
      </thead>

      <tbody>
        {
          state.cart.map((item, i)=>{
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td className='count'>{item.count}</td>
                <td className='price'>{parseInt(item.price)*item.count}원</td>
                <td>
                  <button onClick={() => dispatch(addCount(item.id))}>+</button>
                  <button onClick={() => dispatch(subCount(item.id))}>-</button>
                  <button onClick={()=>
                    dispatch(deleteItem(item.id))
                  }>삭제</button>
                </td>

              </tr>

            )
          })
        }
      </tbody>
    </Table>
    <div className='total'>
                  총 금액 : <span
                  > 0</span>
                </div>
  
    </div>
  )
}
