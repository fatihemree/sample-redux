import { Button, Row, Space } from 'antd'
import React, { useCallback, useMemo, useState } from 'react'

export default function SampleState() {
    const [counter, setCounter] = useState(0);
    return (
        console.log('render', counter),
        <div>
            <h1>State</h1>
            <h1>{counter}</h1>
            <Space>
            <Button type='primary' onClick={() => setCounter(state => (state + 1))}>Arttır</Button>
            <Button type='primary' onClick={() => setCounter(3)}>3</Button>
            </Space>
        </div>
    )
}

// export default function SampleState() {
//     const [counter, setCounter] = useState(0);
//     return useMemo(() =>  (
//         console.log('render', counter),
//         <div>
//             <h1>UseMemo</h1>
//             <h1>{counter}</h1>
//             <Space>
//             <Button type='primary' onClick={() => setCounter(state => (state + 1))}>Arttır</Button>
//             <Button type='primary' onClick={() => setCounter(3)}>3</Button>
//             </Space>
//         </div>
//     ), [counter])
// }



// export default function SampleState() {
//   const [user, setUser] = useState([
//     {
//       name: 'fatih',
//       surname: 'kalem',
//       age: 25
//     },
//     {
//       name: 'ali',
//       surname: 'kuşcu',
//       age: 25
//     },
//     {

//       name: 'ömer',
//       surname: 'hayyam',
//       age: 25
//     },
//   ])


//   const changeUserName =useCallback(
//     (index,name) => 
//       {
//         user[index].name = name
//         console.log('changeUserName', user)
//         // setUser(user)
//         setUser([...user])
//       }
//     ,
//     [user]
//   );


//   return (
//     useMemo(() => {
//       console.log('render', user.length)
//       return (<>
//         <h1>UserList</h1>
//         <Space>
//           <Button type='primary'
//             onClick={() => {
//               setUser(user => [...user, { name: 'new', surname: 'user', age: 25 }])
//             }}>add user</Button>
//           <Button type='primary'
//             onClick={ ()=>changeUserName(1, 'ahmet')

//             }>user change</Button>
//         </Space>
//         <Row className='padding-all'>
//           <code>
//             {JSON.stringify(user, '\t')};
//           </code>
//         </Row>
//       </>)
//     }, [changeUserName, user])
//   )
// }
