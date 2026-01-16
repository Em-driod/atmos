export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Atelier' | 'Ready-to-Wear' | 'Accessories';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  address: string;
  email: string;
  saveDetails: boolean;
}
