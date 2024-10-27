export interface Invoice {
  id: string;
  createdAt: string; // Može se koristiti Date ako je parsirano kao datum
  paymentDue: string; // Takođe može biti Date
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: 'pending' | 'paid' | 'draft'; // Primer sa mogućim statusima
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
