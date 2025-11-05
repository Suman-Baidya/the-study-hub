import "./app.css"
import Card from "./components/Card"

const App = () => {
  
  const cardData = [
    {
      title: "Javs Script",
      image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
      descriptioon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, architecto?"
    },
    {
      title: "React Js",
      image: "https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React.jpg",
      descriptioon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, architecto?"
    },
    {
      title: "Tailwind",
      image: "https://miro.medium.com/1*tHpUU_Z2pTMt5G1KfY0ulg.jpeg",
      descriptioon: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, architecto?"
    }
  ]



  return (
    <>
      <h1 className='text-amber-300 bg-green-700 p-4 rounded-2xl'>Hello Tailwind</h1>
      <div className="flex gap-1 flex-col">
        <Card title={cardData[0].title} image={cardData[0].image} description={cardData[0].descriptioon} />
        <Card title={cardData[1].title} image={cardData[1].image} description={cardData[1].descriptioon} />
        <Card title={cardData[2].title} image={cardData[2].image} description={cardData[2].descriptioon} />

      </div>
      
    </>
  )
}

export default App
