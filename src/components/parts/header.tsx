import { motion } from "framer-motion"
import { Skull } from "lucide-react"


const memeEmojis = ["😎", "🤡", "🦄", "😂", "🥲", "💩", "👽", "🧠", "🍕", "🚀", "🐸", "🔥", "🎉"];
function getRandomEmoji() {
  return memeEmojis[Math.floor(Math.random() * memeEmojis.length)];
}

export default function Header() {
  const emoji = getRandomEmoji();
  return (
    <header className="border-b border-border bg-gradient-to-r from-pink-200 via-yellow-100 to-blue-200 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="text-primary"
            >
              <Skull size={32} />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-background flex items-center gap-2">
                Stupidity {emoji}
              </h1>
              <p className="text-sm text-muted-foreground font-mono">
                The most advanced website with various AI-assisted tools...to do absolutely nothing useful.
                <span className="ml-2">{getRandomEmoji()}</span>
              </p>
              <p className="text-xs text-pink-600 font-bold mt-1">
                <span role="img" aria-label="meme">🦄</span> 100% meme-powered. <span role="img" aria-label="clown">🤡</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
