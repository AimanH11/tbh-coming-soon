import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail } from 'lucide-react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail('')
    }, 1500)
  }

  return (
    <div className="tbh-hero-bg">
      {/* Main Centered Content */}
      <div className="tbh-hero-center">

      <img src="/3 3.png" alt="TBH - The Brand Humans" className="tbh-logo-img" />  
       
        {/* Animated Underline */}
        <motion.div
          className="tbh-hero-underline"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1, type: 'spring' }}
        />
        {/* Glassy Launch Badge */}
        <motion.div
          className="tbh-glass-launch-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Site launching soon.
        </motion.div>
        {/* Subheadline */}
        <motion.p
          className="tbh-hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          We build personal brands for founders, CEOs & VCs through strategy, content & storytelling.<br />
          You lead the company. We build the brand behind it—you.
        </motion.p>
         {/* Headline */}
         <motion.h1
          className="tbh-hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          COMING SOON
        </motion.h1>
        {/* Email Signup */}
        <motion.div
          className="tbh-hero-email-signup"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h3 className="tbh-email-headline">Be the first to know when we launch.</h3>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="email-form">
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="email-input"
                />
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="loading-spinner"
                    />
                  ) : (
                    "Notify Me"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="success-icon" />
              <p>Thanks! We'll keep you posted.</p>
            </motion.div>
          )}
        </motion.div>
        <div className="tbh-hero-footer-email">
          Questions? Email us at <a href="mailto:info@thebrandhumans.com" className="email-link">info@thebrandhumans.com</a>
        </div>
       
        <div className="tbh-hero-socials">
          <a href="https://www.linkedin.com/company/thebrandhumans/" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={22} /></a>
          <a href="https://www.instagram.com/thebrandhumans/?igsh=ZDQzMWZ4ZjR4bnp2" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={22} /></a>
        </div>
       
      </div>
      {/* Animated Gradient Blob from Top Right to Bottom */}
      <motion.div
        className="tbh-hero-gradient-blob"
        initial={{ scale: 1, opacity: 0.18 }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.18, 0.22, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="1000" height="900" viewBox="0 0 1000 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="80%" cy="0%" r="120%" fx="100%" fy="0%">
              <stop offset="0%" stop-color="#fde6e1" stop-opacity="0.85"/>
              <stop offset="100%" stop-color="#fff8f3" stop-opacity="0.01"/>
            </radialGradient>
          </defs>
          <ellipse cx="800" cy="100" rx="600" ry="400" fill="url(#grad1)" />
        </svg>
      </motion.div>
      {/* Gently Animated Blobs Inspired by Reference Image */}
      <motion.div
        className="tbh-hero-bg-blob blob-top-left"
        initial={{ scale: 1, y: 0, x: 0, opacity: 0.7 }}
        animate={{ scale: [1, 1.04, 1], y: [0, 18, 0], x: [0, -12, 0], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="520" height="700" viewBox="0 0 520 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q120,180 0,400 Q80,700 400,700 Q0,600 0,0 Z" fill="#C7B0B7" fillOpacity="0.22"/>
        </svg>
      </motion.div>
      <motion.div
        className="tbh-hero-bg-blob blob-bottom-left"
        initial={{ scale: 1, y: 0, x: 0, opacity: 0.7 }}
        animate={{ scale: [1, 1.06, 1], y: [0, -18, 0], x: [0, 12, 0], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 Q200,200 0,0 Q300,100 600,400 Q200,350 0,400 Z" fill="#C7B0B7" fillOpacity="0.18"/>
        </svg>
      </motion.div>
      <motion.div
        className="tbh-hero-bg-blob blob-bottom-right"
        initial={{ scale: 1, y: 0, x: 0, opacity: 0.7 }}
        animate={{ scale: [1, 1.03, 1], y: [0, -12, 0], x: [0, -10, 0], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg width="500" height="320" viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M500,320 Q400,120 500,0 Q200,100 0,320 Q300,300 500,320 Z" fill="#C7B0B7" fillOpacity="0.13"/>
        </svg>
      </motion.div>
      </div>
  )
}

export default App
