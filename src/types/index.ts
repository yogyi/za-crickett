export type ProductCategory =
  | "bats"
  | "gloves"
  | "pads"
  | "wicket-keeping"
  | "accessories"
  | "services";

export interface CustomizationOption {
  id: string;
  label: string;
  type: "select" | "text" | "number" | "range";
  options?: string[];
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  helperText?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  tagline?: string;
  image: string;
  images?: string[];
  badge?: string;
  variants?: { id: string; label: string; color?: string; image?: string }[];
  customization?: CustomizationOption[];
  features?: string[];
  inStock: boolean;
}

export interface CartItem {
  cartId: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
  customization?: Record<string, string>;
}

export interface Athlete {
  id: string;
  name: string;
  role: string;
  region: "Singapore" | "Hong Kong";
  image: string;
  imageFocus?: string;
  /** Extra CSS scale for cards when the source portrait is framed small */
  imageScale?: string;
  productLine?: string;
  productHref?: string;
  bio?: string;
  records?: string[];
  experience?: string[];
  achievements?: string[];
  featured?: boolean;
}
