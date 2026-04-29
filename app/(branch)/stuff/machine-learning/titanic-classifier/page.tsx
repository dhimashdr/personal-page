'use client'
import Link from "next/link";
import {useState, Suspense, lazy, useRef } from "react";

function PredictionLoading(){
  return (<div className={`w-full p-4 bg-slate-800/50 border-2 border-slate-600 rounded-lg flex items-center gap-4`}>
        <div className="w-1 h-3 bg-orange-600 animate-spin ease-out">
          <div className="w-full h-full bg-sky-500 animate-spin delay-300 ease-out">
          </div>
        </div>
        <p className=''>Getting predictions...</p>
      </div>
      )
}

export default function Home(){
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'      
    });
  };

  const [result, setResult] = useState<Promise<any> | null>(null);
  const PredictionResult = lazy(() => import("./components/PredictionResult"))
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  interface PredictionInput{
    "age": number
    "sex_female": number
    "sex_male": number
    "family": number
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const data : PredictionInput = {
      'age' : Number(formData.get('age')),
      'sex_female' : Number(String(formData.get('gender')).length == 6 ? 1 : 0),
      'sex_male' : Number(String(formData.get('gender')).length == 4 ? 1 : 0),
      'family' : Number(formData.get('family'))
    }

    const promise = handlePrediction(data);
    setResult(promise);
  };

  const handlePrediction = async (e: PredictionInput) => {
      const fetchPromise = await fetch("/api/predict", { method: "POST", body: JSON.stringify(e) })
      const timerPromise = sleep(3000);
      const [response] = await Promise.all([fetchPromise, timerPromise]);

      const data = await response.json()
      return data.prediction
  }

  return (
    <div>
      <div className="flex py-5 h-[50vh] w-full bg-no-repeat bg-size-[100%_auto] md:bg-size-[100%_auto] lg:bg-size-[80%_auto] lg:bg-top-right bg-bottom bg-[url('/images/stuff/machine-learning/titanic-survival-prediction/titanic.png')]">
        <div className="my-auto h-fit mx-6 md:mx-18 lg:mx-36">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold p-4 w-2/3 text-shadow-lg/20">
          <span className="text-orange-300">Titanic </span> 
          <span className="text-slate-200">Survival </span> 
          <span className="text-sky-200">Prediction</span></h1>
          <p className="text-[0.5rem] md:text-xs lg:text-sm px-4 w-2/5">Want to know the possibility whether you would survived or not in the historical Titanic sinking? Try it!</p>
        </div>
      </div>

      <div className="flex-col py-5">
        <form onSubmit={handleSubmit} className="grid p-4 px-8 md:px-20 lg:px-40 gap-2">
          <label htmlFor="age" className="italic text-sm">How old are you?</label>
          <input name="age" type="number" placeholder="e.g. 23" className="outline-gray-600 outline-2 focus:outline-orange-300 rounded-md p-2"/>
          <label htmlFor="gender" className="italic text-sm">What is your gender?</label>
          <select name="gender" className="outline-gray-600 outline-2 focus:outline-orange-300 rounded-md p-2" defaultValue={"female"
          }>
            <option className="bg-black text-xs" value="female">Female</option>
            <option className="bg-black text-xs" value="male">Male</option>
          </select>
          <label htmlFor="family" className="italic text-sm">How many family members/relatives are coming with you?</label>
          <input className="outline-gray-600 outline-2 focus:outline-orange-300 rounded-md p-2" name="family" type="number" placeholder="e.g. 4 (include yourself)" />
          <br />
          <button onClick={scrollToSection} className="bg-orange-600 hover:bg-orange-700 active:bg-orange-700 border-2 border-orange-900 w-1/2 mx-auto p-2 rounded-md" type="submit">Predict</button>
        </form>
      </div>
      <div className="p-4 px-8 md:px-20 lg:px-40">
        {result && (
        <Suspense fallback={PredictionLoading()}>
          <PredictionResult result={result} />
        </Suspense>
      )}
      </div>
      <div className="w-full text-xs font-medium p-4 px-8 md:px-20 lg:px-40 grid grid-cols-2">
        <p>dhimashdr</p>
        <Link className="text-right" href="./titanic-classifier/repositories">[repositories]</Link>
      </div>
      <div ref={targetRef}></div>
    </div>
  )
}