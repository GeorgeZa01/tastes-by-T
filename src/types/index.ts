export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  imageText: string;
  description: string;
  formLink: string;
  image: string;
  products: Product[];
}

export interface RecommendationRequest {
  prompt: string;
}

export interface RecommendationResponse {
  productName: string;
  rationale: string;
  suggestedCategory: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
