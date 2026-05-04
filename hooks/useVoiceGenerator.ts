// hooks/useVoiceGenerator.ts
import { useRef, useCallback } from 'react';

export const useVoiceGenerator = (isMuted: boolean) => {
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  if (typeof window !== 'undefined' && !synthesisRef.current) {
    synthesisRef.current = window.speechSynthesis;
  }

  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (isMuted || !synthesisRef.current) return;

    // Cancel current speech
    synthesisRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1.0;
    
    if (onEnd) {
      utterance.onend = onEnd;
    }

    // Get available voices
    const voices = synthesisRef.current.getVoices();
    const preferredVoice = voices.find(v => 
      v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Female'))
    );
    if (preferredVoice) utterance.voice = preferredVoice;

    currentUtteranceRef.current = utterance;
    synthesisRef.current.speak(utterance);
  }, [isMuted]);

  const stop = useCallback(() => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel();
    }
  }, []);

  return { speak, stop };
};