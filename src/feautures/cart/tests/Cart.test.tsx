import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CartProductCard from '../components/CartProductCard';

describe('Cart Component', () => {
  it('should display correct product name', () => {
    const product = {
      id: 1,
      title: 'New Product',
      image: 'https://exmaple.com',
      price: 120,
      category: 'Products',
      quantity: 1,
    };
    render(<CartProductCard product={product} />);

    expect(
      screen.getByText(`${product.title}...`)
      // @ts-ignore
    ).toBeInTheDocument();
  });

  it('should display remove btn', () => {
    const product = {
      id: 1,
      title: 'New Product',
      image: 'https://exmaple.com',
      price: 120,
      category: 'Products',
      quantity: 1,
    };
    render(<CartProductCard product={product} />);
    expect(
      screen.getByText('Remove')
      // @ts-ignore
    ).toBeInTheDocument();
  });

  // it('should display correct plice table', () => {
  //   const products = [
  //     {
  //       id: 1,
  //       title: 'Wireless Headphones',
  //       image: 'https://example.com/images/headphones.jpg',
  //       price: 89.99,
  //       category: 'Electronics',
  //       quantity: 25,
  //     },
  //     {
  //       id: 2,
  //       title: 'Leather Wallet',
  //       image: 'https://example.com/images/wallet.jpg',
  //       price: 39.99,
  //       category: 'Accessories',
  //       quantity: 50,
  //     },
  //     {
  //       id: 3,
  //       title: 'Running Shoes',
  //       image: 'https://example.com/images/shoes.jpg',
  //       price: 109.99,
  //       category: 'Footwear',
  //       quantity: 30,
  //     },
  //     {
  //       id: 4,
  //       title: 'Smartphone',
  //       image: 'https://example.com/images/smartphone.jpg',
  //       price: 699.99,
  //       category: 'Electronics',
  //       quantity: 10,
  //     },
  //     {
  //       id: 5,
  //       title: 'Coffee Maker',
  //       image: 'https://example.com/images/coffee-maker.jpg',
  //       price: 49.99,
  //       category: 'Home Appliances',
  //       quantity: 15,
  //     },
  //     {
  //       id: 6,
  //       title: 'Gaming Mouse',
  //       image: 'https://example.com/images/mouse.jpg',
  //       price: 29.99,
  //       category: 'Electronics',
  //       quantity: 40,
  //     },
  //     {
  //       id: 7,
  //       title: 'Backpack',
  //       image: 'https://example.com/images/backpack.jpg',
  //       price: 59.99,
  //       category: 'Accessories',
  //       quantity: 12,
  //     },
  //     {
  //       id: 8,
  //       title: 'Yoga Mat',
  //       image: 'https://example.com/images/yoga-mat.jpg',
  //       price: 19.99,
  //       category: 'Sports & Outdoors',
  //       quantity: 80,
  //     },
  //     {
  //       id: 9,
  //       title: 'Bluetooth Speaker',
  //       image: 'https://example.com/images/speaker.jpg',
  //       price: 99.99,
  //       category: 'Electronics',
  //       quantity: 20,
  //     },
  //     {
  //       id: 10,
  //       title: 'Smart Watch',
  //       image: 'https://example.com/images/smartwatch.jpg',
  //       price: 199.99,
  //       category: 'Electronics',
  //       quantity: 35,
  //     },
  //   ];

  //   useCartStore.getState().insertIntoCart({
  //     product: {
  //       id: 1,
  //       title: 'Wireless Headphones',
  //       image: 'https://example.com/images/headphones.jpg',
  //       price: 89.99,
  //       category: 'Electronics',
  //       },
  //   });

  //   render(<PricesTable />);
  //   // @ts-ignore
  //   expect(screen.getAllByText('Total')).toBeInTheDocument();
  // });
});
