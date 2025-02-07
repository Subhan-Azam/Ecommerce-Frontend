export interface PropsTypes {
  src: String;
}

export interface titleProp {
  title: String;
}
export interface SearchBtnPropsTypes {
  style: String;
  content: String;
}

export interface FreeDeliveryPropsTypes {
  src: String;
  title: String;
  text: String;
}

export interface ProductCardPropsTypes {
  id: number;
  src: string;
  title: string;
  price: number;
  category: string;
  description: string;
}


// reduce types
export type Category = string;

export interface CategoryState {
  allCategories: Category[];
  loading: boolean;
  error: string | null;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface Review {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ReviewState {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

