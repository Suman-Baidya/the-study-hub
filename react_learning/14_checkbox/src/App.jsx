import MultipleCheckbox from "./components/MultipleCheckbox"
import SelectAll from "./components/SelectAll"
import SingleCheckbox from "./components/SingleCheckbox"

const App = () => {
  

  return (
    <main className="min-h-screen flex flex-col p-20 gap-10 bg-gray-900 text-white">
      <div className="flex flex-col gap-10">
        
        <SingleCheckbox />
        <MultipleCheckbox />
        <SelectAll />
      </div>
    </main>
  )
}

export default App
