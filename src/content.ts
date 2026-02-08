// src/background.ts
import { pipeline, env } from '@huggingface/transformers';

// Setup: Point to local model if bundled, or allow remote for dev
env.allowRemoteModels = true; 

let classifier: any = null;

// Initialize the Zero-Shot Pipeline
const initClassifier = async () => {
  if (!classifier) {
    console.log("Initializing AI Model...");
    // 'Xenova/mobilebert-uncased-mnli' is lightweight and fast for browsers
    classifier = await pipeline('zero-shot-classification', 'Xenova/mobilebert-uncased-mnli');
    console.log("Model Loaded.");
  }
  return classifier;
};

// Listen for messages from the 'Sensor' (content.ts)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'ANALYZE_TEXT') {
    (async () => {
      try {
        const model = await initClassifier();
        // Zero-shot labels we want the AI to distinguish
        const labels = ['spoiler', 'not a spoiler'];
        
        const result = await model(request.text, labels);
        
        // Find the index of the 'spoiler' label and its score
        const spoilerIndex = result.labels.indexOf('spoiler');
        const score = result.scores[spoilerIndex];

        // Return the decision to the content script
        sendResponse({ isSpoiler: score > 0.8, confidence: score });
      } catch (error) {
        console.error("AI Inference Error:", error);
        sendResponse({ error: true });
      }
    })();
    return true; // Keeps the message channel open for async response
  }
});