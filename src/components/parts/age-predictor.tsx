"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sparkles, CopySlash as Stars, Zap, Brain, Shield, Clock } from "lucide-react"

// Stage Components
type AgePredictorInputStageProps = {
  age: string;
  setAge: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  currentIntroLine: string;
};
function AgePredictorInputStage({ age, setAge, handleSubmit, currentIntroLine }: AgePredictorInputStageProps) {
  return (
    <motion.div
      key="input"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* ...existing code for input stage... */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* ...existing code... */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="space-y-8"
        >
          {/* ...existing code... */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="text-xs font-medium">
                <Brain size={12} className="mr-1" />
                AI-Powered
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Clock size={12} className="mr-1" />
                Real-time Analysis
              </Badge>
            </div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Advanced Age
              <br />
              <span className="text-primary">Prediction Engine</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{currentIntroLine}</p>
          </div>
          {/* ...existing code... */}
          <div className="grid grid-cols-2 gap-4">
            {/* ...existing code for cards... */}
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Stars size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Quantum Analysis</h4>
                  <p className="text-xs text-muted-foreground">Advanced algorithms</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Instant Results</h4>
                  <p className="text-xs text-muted-foreground">Real-time processing</p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
        <div className="space-y-8">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles size={20} className="text-primary" />
                <span>Begin Analysis</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Enter your age to unlock personalized destiny insights
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="age" className="text-sm font-semibold text-foreground block">
                    Age Input
                  </label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age (1-150)"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="text-lg h-14 border-2 focus:border-primary"
                    min="1"
                    max="150"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Your data is processed securely and never stored
                  </p>
                </div>
                <Separator />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full text-lg py-6 font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    disabled={!age.trim()}
                  >
                    <Brain className="mr-2" size={20} />
                    Initialize Prediction Algorithm
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-xs text-muted-foreground">Predictions Made</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

type AgePredictorProcessingStageProps = {
  currentForecastLine: string;
};
function AgePredictorProcessingStage({ currentForecastLine }: AgePredictorProcessingStageProps) {
  return (
    <motion.div
      key="processing"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* ...existing code for processing stage... */}
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
                className="text-primary"
              >
                <Stars size={120} />
              </motion.div>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute text-accent"
                  animate={{
                    rotate: [0, 360],
                    x: [0, 80 * Math.cos((i * Math.PI) / 3), 0],
                    y: [0, 80 * Math.sin((i * Math.PI) / 3), 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    ease: "linear",
                  }}
                >
                  <Sparkles size={20} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="space-y-4"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <h2 className="text-5xl font-bold text-foreground">ANALYSIS IN PROGRESS</h2>
            <p className="text-xl text-muted-foreground">Advanced quantum algorithms processing your data</p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-primary/30">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <Brain size={24} className="text-primary" />
                  <h3 className="text-lg font-semibold">Current Process</h3>
                </div>
                <p className="text-foreground leading-relaxed">{currentForecastLine}</p>
              </motion.div>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock size={24} className="text-primary" />
                  <h3 className="text-lg font-semibold">Processing Status</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Quantum Analysis",
                    "Neural Processing",
                    "Destiny Calculation",
                    "Result Compilation",
                  ].map((step, i) => (
                    <motion.div
                      key={step}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: i < 2 ? 1 : 0.3 }}
                      transition={{ delay: i * 1.5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={i < 2 ? { scale: [1, 1.5, 1] } : {}}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <span className="text-sm">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

type AgePredictorResultStageProps = {
  age: string;
  currentResultLine: string;
};
function AgePredictorResultStage({ age, currentResultLine }: AgePredictorResultStageProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-16"
    >
      <div className="text-center space-y-12 flex justify-center items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="p-6 bg-primary/10 rounded-full">
              <Zap size={80} className="text-primary" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-4">Analysis Complete</h2>
            <p className="text-xl text-muted-foreground">Quantum destiny calculation successfully processed</p>
          </motion.div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-card/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Prediction Results</CardTitle>
              <p className="text-muted-foreground">Based on advanced algorithmic analysis</p>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Shield size={14} className="mr-2" />
                  Verified Result
                </Badge>
                <motion.p
                  className="text-3xl text-foreground font-bold leading-relaxed"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  {currentResultLine.replace("{age}", age)}
                </motion.p>
              </motion.div>
              <Separator />
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Confidence Level</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">0.001s</div>
                  <div className="text-xs text-muted-foreground">Processing Time</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-bold text-primary">∞</div>
                  <div className="text-xs text-muted-foreground">Accuracy Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

const introLines = [
  "Enter your age, and our mystical algorithm will predict your destiny.",
  "Tell us your age — we'll forecast your entire future with 100% accuracy (trust us).",
  "Reveal your age to unlock secrets the universe doesn't want you to know.",
  "Provide your age, and we'll use forbidden technologies to calculate your fate.",
  "Whisper your age into the void (or just type it here), and we'll reveal your true path.",
  "Want to know your destiny? All we need is… your age. Nothing suspicious at all.",
  "Give us your age, and our prophecy engine will blow your mind.",
  "Enter your age to let the cosmos, the AI, and three raccoons forecast your future.",
]

const forecastLines = [
  "Analyzing the alignment of stars and the cosmic vibrations…",
  "Predicting your destiny through advanced quantum nonsense…",
  "Peeking into the future using forbidden algorithms…",
  "Forecasting your career, love life, and lunch plans…",
  "Consulting the wisdom of 3 wise pigeons…",
  "Running your aura through 7.5 supercomputers…",
  "Summoning the spirit of Microsoft Clippy for guidance…",
  "Scanning your timeline across infinite universes…",
]

const resultLines = [
  "You are… {age} years old.",
  "The prophecy reveals… you've lived {age} cycles of the sun.",
  "Destiny has spoken: you radiate pure {age} energy.",
  "We have calculated your soul number. It is exactly: {age}.",
  "All signs point to this truth: you're {age}.",
  "Our divine forecast is complete → you're literally {age} years old.",
  "The future is uncertain… but one fact is clear: {age}.",
  "After all calculations, the result is obvious: you are {age}.",
]

export default function AgePredictorPage() {
    const [age, setAge] = useState("")
    const [stage, setStage] = useState<"input" | "processing" | "result">("input")
    const [currentIntroLine] = useState(() => introLines[Math.floor(Math.random() * introLines.length)])
    const [currentForecastLine] = useState(() => forecastLines[Math.floor(Math.random() * forecastLines.length)])
    const [currentResultLine] = useState(() => resultLines[Math.floor(Math.random() * resultLines.length)])

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!age.trim()) return
      setStage("processing")
      setTimeout(() => {
        setStage("result")
      }, 8000)
    }

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <AnimatePresence mode="wait">
            {stage === "input" && (
              <AgePredictorInputStage
                age={age}
                setAge={setAge}
                handleSubmit={handleSubmit}
                currentIntroLine={currentIntroLine}
              />
            )}
            {stage === "processing" && (
              <AgePredictorProcessingStage currentForecastLine={currentForecastLine} />
            )}
            {stage === "result" && (
              <AgePredictorResultStage
                age={age}
                currentResultLine={currentResultLine}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    )
}
