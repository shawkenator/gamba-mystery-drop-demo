import React, { useEffect, useState } from 'react'
import './product-landing.css'
import styled from 'styled-components'

export default function ProductLanding() {
    const [showDialog, setShowDialog] = useState(false)
    const DROP_DATE = new Date('2025-06-05T12:00:00-04:00') // Eastern Time
    const now = new Date()
    const isDropActive = now >= DROP_DATE


    const getRemainingTime = () => {
    const now = new Date()
    const diff = DROP_DATE.getTime() - now.getTime()

    if (diff <= 0) return '🚀 It’s live!'

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
    }

    const [timeLeft, setTimeLeft] = useState(getRemainingTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getRemainingTime())
        }, 1000)
    return () => clearInterval(interval)
    }, [])

    const GradientContainer = styled.section`
        background: linear-gradient(135deg, #784ba0, #2b86c5); /* Static gradient */
        border-radius: 12px;
        padding: 40px 24px;
        margin: 0 0 38px 0;
        color: white;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin: 1rem 0;
            font-size: 1.1rem;
            font-weight: 500;
        }

        strong {
            font-weight: 700;
        }
    `

  const SideBySide = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 0px 20px 10px 20px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: flex-start;
    }

    img {
      max-width: 280px;
      border-radius: 12px;
    }

    .text-block {
      max-width: 500px;
    }

    .unlock-button {
      margin-top: 20px;
      background: #03ffa4;
      color: #000;
      font-weight: bold;
      padding: 12px 24px;
      border-radius: 8px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: white;
      }
    }
  `

  return (
    <div className="product-container">
      {/* Header */}
      <header className="product-header">
        <h1 className="product-title">Gamba Drop #001: The Mystery Box</h1>
        <p className="product-subtitle">A limited-edition collectible celebrating the genesis of Gamba v2.</p>
      </header>

      {/* Image + Description Row */}
      <SideBySide>
        <img
          className="product-image"
          src="/mysterydrop.gif"
          alt="Gamba Mystery Box"
        />
        <div className="text-block">
          <p className="product-description">
            This exclusive Gamba Mystery Box contains one of four collectible Genesis Chips — each with a unique look and digital flair inside the Gamba platform.
            Every box includes a digital coin tied to your profile, and a matching physical coin shipped directly to your door.
          </p>
          <button className="unlock-button" onClick={() => setShowDialog(true)}>
            Unlock Mystery Box
          </button>
          <p className="drop-timer">Drop begins in: <strong>{timeLeft}</strong></p>
        </div>
      </SideBySide>

      {/* Features */}
      <GradientContainer>
        <h2>Key Features</h2>
        <ul>
          <li>🎁 <strong>One Box, One Coin</strong> – Each box unlocks a unique collectible.</li>
          <li>🧠 <strong>Digital + Physical</strong> – Claim in-app and receive a real coin too.</li>
          <li>🔥 <strong>Limited Edition</strong> – Only 500 boxes will ever be created.</li>
        </ul>
      </GradientContainer>

      {/* Modal Dialog */}
      {showDialog && (
        <div className="modal-overlay">
            <div className="modal-content">
                <p style={{fontSize: '26px'}}>🕒 Gamba Drop #001 unlocks on <strong>June 20 @ 12PM ET</strong>.</p>
                <p  style={{fontStyle: 'italic', marginBottom: '34px'}}>You're early... but the box isn't ready to open just yet.</p>
                <button onClick={() => setShowDialog(false)}>Close</button>
            </div>
        </div>
      )}

      {/* Footer */}
      <footer className="product-footer">
        <p>Questions? Contact us at <a href="mailto:support@gamba.app">support@gamba.app</a></p>
      </footer>
    </div>
  )
}
