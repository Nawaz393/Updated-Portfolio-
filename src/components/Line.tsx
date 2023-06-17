import  { ReactElement } from 'react'



interface Prop {

  text: string

}
export const Line = ({ text }: Prop): ReactElement => {
  return (

    <div className='h-20  bcol mx-5  rounded-tl-full rounded-br-full grid place-items-center ' >

      <h2 className=' text-white font-bold md:text-4xl text-2xl font-script  capitalize'>{text} </h2>




    </div>
  )
}
