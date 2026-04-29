import Image from 'next/image'
import { use } from 'react'

export default function PredictionDisplay({ result }: { result: Promise<any> }) {
  const res = use(result)
  const conditions = ['did not survive', 'survive']
  const sentences = ['Sorry twin, you probably ', 'Looks like you will ']
  const images = ['/images/stuff/machine-learning/titanic-survival-prediction/mambo_dead.jpg', '/images/stuff/machine-learning/titanic-survival-prediction/mambo_alive.jpg']

  return (
    <div className={`w-full p-4 bg-slate-800/50 border-2 border-slate-600 rounded-lg flex`}>
      <div className="flex-2/3 flex-col my-auto">
      <p className='text-xs'>{sentences[res]}</p>
      <h1 className={`font-bold text-xl ${res == 0 ? 'text-red-600' : 'text-green-600'}`}>{conditions[res]}</h1>
      </div>
      <div className='flex-1/3 flex flex-row-reverse'>
      <Image className='rounded-lg' src={images[res]} alt={images[res]} width={100} height={100}></Image>
      </div>
    </div>
  )
}