import Image from 'next/image'
import EntryCard from './content/entry-card'
export default function Home() {
  return (
  <div className='main-page flex flex-col'>
    <div className='navbar flex flex-row justify-between p-4 border-b-2'>
      <div className='logo font-bold text-2xl'>Calorie Tracker</div>
      <div className='user'><span className='mx-2'>&#128100;</span>Harry Johnson</div>
    </div>
    <div>
      <div className='main'>
        <div className='fitler border-b-2 px-4 py-2'>March</div>
        <div className='content grid grid-cols-4 p-4 space-x-4'>
          <EntryCard date={'20.04.2023'} weight={'76,8'}/>
          <EntryCard date={'21.04.2023'} weight={'76,4'}/>
          <EntryCard date={'22.04.2023'} weight={'76,9'}/>
          <EntryCard date={'23.04.2023'} weight={'75,3'}/>
          <EntryCard date={'24.04.2023'} weight={'75,7'}/>
          <EntryCard date={'25.04.2023'} weight={'75,4'}/>
          <EntryCard date={'25.04.2023'} weight={'75,4'}/>
          <EntryCard date={'25.04.2023'} weight={'75,4'}/>
          <EntryCard date={'25.04.2023'} weight={'75,4'}/>
          <EntryCard date={'25.04.2023'} weight={'75,4'}/>
          <EntryCard date={'25.04.2023'} weight={'75,4'}/>
        </div>
      </div>
    </div>
  </div>
    )
}
