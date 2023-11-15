import "./App.css"

const App = () => {
  return <section className="grid gap-8 sm:max-xl:bg-blue-50 tablet:grid-cols-2 tablet:items-center tablet:text-left">
    <div>
      <img src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-2206.jpg" alt="" 
       className="w-full rounded-lg"
       />
    </div>
    <div>
      <h1 className="mb-2 text-4xl font-medium">Headline</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas consectetur rem 
          veniam dignissimos reiciendis delectus? Nobis enim voluptatum exercitationem ab, cumque temporibus 
          nesciunt quia deserunt animi iusto, quae suscipit.</p> 
    </div>
  </section>
};

export default App;
