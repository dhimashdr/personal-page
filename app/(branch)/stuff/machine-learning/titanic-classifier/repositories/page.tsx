import Link from 'next/link'

export default function Repo(){
    return (
        <div className='w-full px-4'>
            <div className='w-full py-3 md:py-4'>
                <h1 className='font-bold text-xl md:text-2xl'>Titanic Survival Prediction <span className='font-light text-xs md:text-sm'>/ repository</span></h1>
            </div>
            {/* <hr /> */}
            <div className='grid grid-cols-1 w-full py-3 md:py-4'>
                <div className='flex gap-2 h-10'>
                    <div className='h-full w-1/12 border-b-2 border-l-2 border-amber-400'></div>
                    <Link href={'https://github.com/dhimashdr/titanic-survivor-classifier-render-deployment'} className='underline  h-fit mt-auto text-xs md:text-sm'>fastapi deployment</Link>
                </div>
                <div className='flex gap-2 h-10'>
                    <div className='h-full w-1/12 border-b-2 border-l-2 border-amber-400'></div>
                    <Link href={'https://www.kaggle.com/code/dimashendrico/titanic-survivor-classifier-rf-xgb'} className='underline  h-fit mt-auto text-xs md:text-sm'>notebook</Link>
                </div>
            </div>
        </div>
    )
}