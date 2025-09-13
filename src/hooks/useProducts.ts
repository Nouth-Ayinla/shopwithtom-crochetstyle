import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image: string | null;
  stock_quantity: number | null;
  created_at: string;
  updated_at: string;
  isNew?: boolean;
  whatsappMessage?: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        // Transform data to match frontend interface
        const transformedProducts: Product[] = (data || []).map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          image: product.image_url || '/placeholder.svg',
          stock_quantity: product.stock_quantity,
          created_at: product.created_at,
          updated_at: product.updated_at,
          isNew: isNewProduct(product.created_at),
          whatsappMessage: `Hi! I'm interested in ${product.name} for $${product.price}. Is it available?`
        }));
        setProducts(transformedProducts);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const isNewProduct = (createdAt: string) => {
    const now = new Date();
    const created = new Date(createdAt);
    const daysDiff = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24));
    return daysDiff <= 7; // Consider products new for 7 days
  };

  return { products, loading, error, refetch: fetchProducts };
};