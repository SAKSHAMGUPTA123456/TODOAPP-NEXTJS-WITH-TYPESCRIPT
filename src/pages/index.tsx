import Imj from 'next/image'
import { useEffect, useState, type JSX } from 'react'
type todo={
  id:number,
  name:string,
  booli:boolean
}
const Index=()=>{
  const [oldvalue,newvalue]=useState<string>("")
  const [oldarray,newarray]=useState<todo[]>([])
  const [oldcount,newcount]=useState<number>(1)
useEffect(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("cart");
    if (saved) {
      newarray(JSON.parse(saved));
    }
  }
}, []);
const handleclick=()=>{
  if(oldvalue==""){alert('pls write some task')}else{
console.log(oldvalue)
const firstuder={
  id:oldcount,
  name:oldvalue,
  booli:true
}
newcount((prev)=>prev+1)
newarray([...oldarray,firstuder])
newvalue("")
}
}
useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(oldarray))
},[oldarray])
const handling=(e:React.ChangeEvent<HTMLInputElement>)=>{
newvalue(e.target.value)
}
const makingtextunderline=(e:React.MouseEvent<HTMLButtonElement>,value:todo)=>{
const updatedArray = oldarray.map((curr: todo) =>
    curr.id === value.id ? {...curr,booli:!curr.booli}:curr
  );
  newarray(updatedArray); // Replace with new array
}
const handledelete=(val:todo)=>{
  if(oldarray.length==1){
    newcount(1)
  }
const newupdated=oldarray.filter((curr:todo)=>curr.id!=val.id)
newarray(newupdated)
}
  return(
   <>


   <div className='bg-blue-600 flex justify-between'>
<div></div>
    <div className='ml-20' style={{fontWeight:"bold"}}>WELCOME TO TODO APP</div>
    <div></div>
   </div>





<div className='mt-10'>
  <div className='flex justify-between'>
    <div></div>
  <div style={{width:"300px",boxShadow: '0px 4px 10px black',backgroundColor:"white"}}>
    <div><h1 style={{fontWeight:"bold"}}>Itask-Manage Your todos at one place</h1></div>
    <div style={{fontWeight:"bold"}}>Add a Todo</div>
    <div className='flex'>
      <div className='mt-5'><input type='text' style={{backgroundColor:"white",width:"250px",border:"2px solid black",borderRadius:"20px"}} onChange={handling} value={oldvalue}></input></div>
      <div className='mt-5 ml-2'><button style={{backgroundColor:"lightblue",borderRadius:"20px",height:"30px"}} onClick={handleclick}>Save</button></div>
    </div>
   <hr
  className='mt-4 w-2/3 mx-auto'
  style={{
    border: 'none',
    height: '2px',
    backgroundColor: 'black',
    boxShadow: '0 0 8px black',
  }}
/>
<h1 className='mt-3' style={{fontWeight:"bold"}}>Your Todos</h1>
{oldarray?.map((curr:todo):JSX.Element=>{
  return(
    <div className='flex justify-between' key={curr.id}>
      <div><h3>{curr.id}</h3></div>
<h1 className={curr.booli ? "break-words w-[200px]" : " line-through w-[200px] break-words"}>{curr.name}</h1>
 <div><button onClick={(e)=>makingtextunderline(e,curr)}><Imj src={"./image/download.png"} alt='' width={20} height={45}/></button></div>
  <div><button onClick={()=>handledelete(curr)}><Imj src={"./image/download (1).png"} alt='' width={20} height={45}/></button></div>
 </div>
  )
})}


</div>
<div></div>
</div></div>

   </>
  )

}
export default Index