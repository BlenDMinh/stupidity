
import AgePredictor from "./components/parts/age-predictor"
import Header from "./components/parts/header"

function MemeBanner() {
  return (
    <div className="w-full bg-yellow-300 text-black text-center py-2 font-bold text-lg flex items-center justify-center gap-2 border-b-2 border-black shadow-lg">
      <span role="img" aria-label="warning">⚠️</span>
      <span>
        CAUTION: This website may cause uncontrollable laughter, existential dread, and a sudden urge to procrastinate.
      </span>
      <span role="img" aria-label="meme">😂</span>
    </div>
  )
}

function App() {
  return (
    <>
      <MemeBanner />
      <Header />
      <main className="flex flex-col items-center w-full">
        <section className="max-w-4xl mx-auto px-8 py-16">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
                <span role="img" aria-label="sparkles">✨</span>
                Welcome to <span className="text-primary">Stupidity™</span>
                <span role="img" aria-label="clown">🤡</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Here you'll find cutting-edge, ultra-advanced, definitely-not-pointless tools.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission? To bring you solutions that nobody asked for… but everybody secretly needs.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <span className="bg-pink-200 text-pink-900 px-3 py-1 rounded-full font-bold text-sm shadow">#MemeTech</span>
                <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full font-bold text-sm shadow">#AI4LOLZ</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-bold text-sm shadow">#ProcrastinationPro</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <p className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
                <span role="img" aria-label="robot">🤖</span>
                Behold our first invention: the <span className="text-primary">Age Forecaster 3000</span>
                <span role="img" aria-label="crystal ball">🔮</span>
              </p>
              <p className="text-xl text-muted-foreground">
                Introducing: the Fate Predictor — a tool so advanced it can reveal everything about you… from just one number.
              </p>
              <p className="text-lg text-muted-foreground">
                Let us begin with our crown jewel: the Prophecy Generator, powered entirely by your age.
              </p>
              <div className="flex justify-center gap-4 pt-2">
                <span className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full font-bold text-sm shadow">#DestinyLOL</span>
                <span className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full font-bold text-sm shadow">#QuantumMeme</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <AgePredictor />
        </section>
      </main>
      <footer className="w-full text-center py-6 text-muted-foreground text-sm border-t border-border mt-12">
        <span role="img" aria-label="copyright">©️</span> 2025 Stupidity™. All rights reserved. <span role="img" aria-label="meme">🦄</span> <span className="font-bold">Made with 0% productivity.</span>
      </footer>
    </>
  )
}

export default App
