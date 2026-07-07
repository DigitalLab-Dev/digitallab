'use client';
import { motion } from 'framer-motion';

/**
 * Renders gradient text with a glow, using a single CSS drop-shadow filter
 * instead of a second absolutely-positioned duplicate text layer. Previous
 * implementations stacked two real text nodes (a blurred "glow" copy behind
 * a solid copy) to fake this look, which duplicated the word in the raw
 * server-rendered HTML (e.g. "CAPTIVATECAPTIVATE").
 */
const GlowText = ({
  children,
  className = '',
  gradientClassName = 'bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600',
  glowColor = 'rgba(249,115,22,0.7)',
  pulse = false,
}) => {
  const staticGlow = `drop-shadow(0 0 18px ${glowColor})`;

  return (
    <motion.span
      className={`inline-block text-transparent bg-clip-text ${gradientClassName} ${className}`}
      style={!pulse ? { filter: staticGlow } : undefined}
      animate={
        pulse
          ? {
              filter: [
                `drop-shadow(0 0 10px ${glowColor})`,
                `drop-shadow(0 0 26px ${glowColor})`,
                `drop-shadow(0 0 10px ${glowColor})`,
              ],
            }
          : undefined
      }
      transition={
        pulse ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined
      }
    >
      {children}
    </motion.span>
  );
};

export default GlowText;
