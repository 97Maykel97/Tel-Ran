type Product = {
  name: string;
  description: string;
  price: number;
  info: () => string;
};

function createProduct(
  name: string,
  description: string,
  price: number,
): Product {
  return {
    name,
    description,
    price,
    info() {
      return `Product: ${this.name}; price: ${this.price}; description: ${this.description}`;
    },
  };
}

const notebook = createProduct(
  'Notebook Lenovo ThinkPad',
  'Intel Core i7, RAM: 16 GB',
  1283,
);

const phone = createProduct(
  'Samsung Galaxy',
  'AMOLED display, memory: 256 GB',
  899,
);

const headphones = createProduct(
  'Sony Headphones',
  'Wireless headphones with noise cancelling',
  349,
);

const products = [notebook, phone, headphones];

function printProducts(items: Product[]): void {
  for (let i = 0; i < items.length; i++) {
    console.log(`Product ${i + 1}`);

    for (const [key, value] of Object.entries(items[i])) {
      const result = typeof value === 'function' ? value.call(items[i]) : value;
      console.log(`  ${key}: ${result}`);
    }
  }
}

printProducts(products);
