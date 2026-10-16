import React, { useRef } from 'react'

const GlowCard = ({card , children , index}) => {
const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const currentCard = cardRefs.current[index];
        if (!currentCard) return;

        // Get the mouse position relative to the card
        const rect = currentCard.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        currentCard.style.setProperty('--start', angle + 60);
    };

  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'>
        <div className='glow'/>
        <div className='flex items-center gap-1 mb-5'>
            {Array.from({length:5}, (_, i) => (
                <img src='/images/star.png ' key={i} alt='star' className='size-5'/>
            ))}
        </div>
        <div className='mb-5'>
            <p className='text-white-50 text-lg' >{card.review}</p>
        </div>
        <div className='flex  gap-5 w-50'>

        {children}
        </div>
    </div>
  )
}

export default GlowCard