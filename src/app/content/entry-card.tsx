export default function EntryCard({date, weight}){
  return (
    <div className="
    mb-4 
    p-3 
    border-slate-300 
    bg-slate-50 
    active:bg-slate-200
    hover:bg-slate-100
    focus:ring
    focus:ring-offset-2
    border 
    rounded-lg
    ">
      <div className="font-bold text-lg">{date}</div>
      <div>{weight}kg</div>
    </div>
  )
}
