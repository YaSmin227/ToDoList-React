import React from 'react'
const TodoList= (props)=>{
    const {items,deletItemfilter,deletItemfindIndex}= props;
    const itemslengh=items.length;
    const listdata=itemslengh ? (items.map(item=>{
        return(
            <div className='content-items' key="item.id">
                <span  className='name'>{item.name}</span>
                <span  className='age'>{item.age}</span>
                <span  className='btn action ' onClick={()=>deletItemfilter(item.id)}>&times;</span>
            </div>
        )
    })):(
        <div className='no-items'>There is no items to show</div>
    )
    return(
       <div className="">
           <div className=' content-items'>
               <span className="name title">Name</span>
               <span className='age  title'>Age</span>
               <span className='action title'>Action</span>
           </div>
            <div>{listdata}</div>
       </div>
    )
}
export default TodoList
