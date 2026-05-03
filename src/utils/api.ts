import type { RecommendationRequest, RecommendationResponse } from '../types';
import { CATEGORIES } from '../data/categories';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-flash-latest';

export const hasRecommendationApi = Boolean(API_BASE_URL || GEMINI_API_KEY);

const buildMenuContext = () =>
  CATEGORIES.map((category) => ({
    category: category.title,
    id: category.id,
    items: category.products.map((product) => product.name).join(', '),
  }));

const fetchGeminiRecommendation = async (prompt: string): Promise<RecommendationResponse | null> => {
  if (!GEMINI_API_KEY) {
    return null;
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Based on my request: "${prompt}", which Tastes By T product do you recommend?`,
              },
            ],
          },
        ],
        systemInstruction: {
          parts: [
            {
              text: `You are a dessert sommelier for Tastes By T. Recommend exactly one item from this menu and return only valid JSON with productName, rationale, and suggestedCategory. Menu context: ${JSON.stringify(buildMenuContext())}`,
            },
          ],
        },
        generationConfig: {
          responseMimeType: 'application/json',
        },
      }),
    },
  );

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    return null;
  }

  try {
    const parsed = JSON.parse(text) as RecommendationResponse;
    if (!parsed.productName || !parsed.rationale || !parsed.suggestedCategory) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
};

/**
 * Fetch recommendation from backend API
 * API key is handled securely on the backend
 */
export const fetchRecommendation = async (
  prompt: string
): Promise<RecommendationResponse | null> => {
  if (GEMINI_API_KEY) {
    return fetchGeminiRecommendation(prompt);
  }

  if (!API_BASE_URL) {
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/recommendations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt } as RecommendationRequest),
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch {
    return null;
  }
};

/**
 * Handle API errors gracefully
 */
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
};
