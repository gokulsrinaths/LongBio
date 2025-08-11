'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const navItems = [
  { href: '#top', label: 'Top', icon: '↑' },
  { href: '#sponsors', label: 'Sponsors', icon: '★' },
  { href: '#resources', label: 'Resources', icon: '📚' },
];

export function QuickNav() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      className="fixed bottom-8 right-8 z-50"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label="Quick navigation"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20">
        <ul className="space-y-2">
          {navItems.map(({ href, label, icon }) => (
            <motion.li key={href}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                <a
                  href={href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 transition-colors"
                  aria-label={label}
                >
                  <span className="text-white text-lg">{icon}</span>
                </a>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}